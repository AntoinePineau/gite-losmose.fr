const SparkPost = require('sparkpost');
const client = new SparkPost(process.env.SPARKPOST, {origin: 'https://api.sparkpost.com'});
const querystring = require('querystring');

exports.handler = function(event, context, callback) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  
  const params = querystring.parse(event.body);
  const lastname = params.lastname;
  const firstname = params.firstname;
  const email = params.email;
  const phone = params.phone;
  const service = params.subject;
  const message = params.message;

  const subject = "Contact depuis gite-losmose.fr à propos de "+service;
  const html = "<html><body><p><b><u>Nom</u></b>: "+lastname
              +"<br/><b><u>Prénom</u></b>: "+firstname
              +"<br/><b><u>Email</u></b>: "+email
              +"<br/><b><u>Téléphone</u></b>: "+phone
              +"<br/><b><u>Sujet</u></b>: "+service
              +"<br/><b><u>Message</u></b>: "+message
              +"</p></body></html>";

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  client.transmissions.send({
      options: {
        sandbox: false
      },
      content: {
        from: {
          email: 'no-reply@email.gite-losmose.fr',
          name: name
        },
        reply_to: 'email',
        subject: subject,
        html: html
      },
    recipients: [{ 
      address: 'contact@gite-losmose.fr'
     }]
  })
  .then(response => {
    console.log('Mail has been sent successfully!');
    console.log(response);
    callback(null, {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    });
  })
  .catch(err => {
    console.log('Whoops! Something went wrong');
    console.log('err:'+err);
    var code = err.statusCode || 500;
    callback(null, {
      statusCode: code,
      headers,
      body: JSON.stringify(err)
    });
  });
}



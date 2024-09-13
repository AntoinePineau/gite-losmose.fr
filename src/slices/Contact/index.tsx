'use client'
import React from "react";
import { dancingScript } from "@/app/components/Header";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;


/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  const dancingScriptClassName = dancingScript.className;

  return (
    <div id="contact" className="shell-wide">{/*
      <div className="range range-30 range-xs-center">
        <div className="cell-md-7">
          <section className="section">
            <iframe src={slice.primary.google_maps_url ||""} width="100%" height="530" style={{border:"0"}} loading="lazy"></iframe>
          </section>
        </div>
        <div className="cell-md-5 reveal-lg-flex">
          <div className="hotel-booking-form">
            <h3 className={dancingScriptClassName}>Contactez-nous</h3>
            <form action='/merci' data-form-output='form-output-global' data-form-type='contact' data-netlify-recaptcha='true' method='post' name='contact'>
              <input type="hidden" name="form-name" value="contact"/>
              <div className="range range-sm-bottom spacing-20">
                <p className="hide">
                  <label>
                    Ne remplissez pas ce champ si vous êtes humain: <input name="bot-field" />
                  </label>
                </p>
                <div className="cell-md-6">
                  <p className="text-uppercase">Nom</p>
                  <div className="form-wrap">
                    <label className="form-label form-label-icon" htmlFor="lastname"><span className="icon icon-primary fa-user"></span><span>Votre nom</span></label>
                    <input className="form-input" id="lastname" type="text" name="lastname" required={true}/>
                  </div>
                </div>
                <div className="cell-md-6">
                  <p className="text-uppercase">Prénom *</p>
                  <div className="form-wrap">
                    <label className="form-label form-label-icon" htmlFor="firstname"><span className="icon icon-primary fa-user"></span><span>Votre prénom</span></label>
                    <input className="form-input" id="firstname" type="text" name="firstname" required={true}/>
                  </div>
                </div>
                <div className="cell-md-6">
                  <p className="text-uppercase">Email *</p>
                  <div className="form-wrap">
                    <label className="form-label form-label-icon" htmlFor="email"><span className="icon icon-primary fa-envelope"></span><span>Votre adresse e-mail</span></label>
                    <input className="form-input" id="email" type="email" name="email" required={true}/>
                  </div>
                  <p className="text-uppercase">Téléphone *</p>
                  <div className="form-wrap">
                    <label className="form-label form-label-icon" htmlFor="phone"><span className="icon icon-primary fa-phone"></span><span>Votre numéro de téléphone</span></label>
                    <input className="form-input" id="phone" type="tel" name="phone" required={true}/>
                  </div>
                  <p className="text-uppercase"></p>
                  <div className="form-wrap form-wrap-validation">
                    <div data-netlify-recaptcha="true"></div>
                  </div>
                </div>
                <div className="cell-md-6">
                  <p className="text-uppercase">Sujet *</p>
                  <div className="form-wrap form-wrap-validation">
                    <select defaultValue={slice.primary.mail_subjects[0]?.subject || ""} required={true} className="form-input select-filter" data-minimum-results-search="-1" data-placeholder="_" data-constraints="@Required" name="subject">
                      {slice.primary.mail_subjects.map((item) => (
                        <option key={item.subject} value={item.subject||""} >{item.subject}</option>
                      ))}
                    </select>
                  </div>
                  <p className="text-uppercase">Message</p>
                  <div className="form-wrap form-wrap-validation">
                    <textarea className="form-input" name="message" required={true}></textarea>
                  </div>
                  <button className="button button-primary button-square" type="submit"><span>Envoyer</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default Contact;

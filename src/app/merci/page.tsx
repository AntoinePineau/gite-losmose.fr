import { Metadata } from "next";
import { createClient } from "@/prismicio";


export default async function Page() {
  return (    
    <h1>Merci pour votre message !</h1>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.meta_image.url || ""],
    },
  };
}
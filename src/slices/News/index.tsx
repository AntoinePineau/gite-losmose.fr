'use client'
import { dancingScript } from "@/app/components/Header";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useEffect } from "react";

/**
 * Props for `News`. TODO
 */
export type NewsProps = SliceComponentProps<Content.NewsSlice>;

/**
 * Component for "News" Slices.
 */
const News = ({ slice }: NewsProps): JSX.Element => {
  const dancingScriptClassName = dancingScript.className;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.taggbox.com/embed-lite.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-expect-error
      if (window.Taggbox) {
        // @ts-expect-error
        window.Taggbox.loadEmbed();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id={slice.primary.uuid || ""} className="section section-md bg-white text-center text-sm-left">
      <div className="shell-wide text-center">
        <h2 className={dancingScriptClassName}>{slice.primary.title}</h2>
        <div 
          className="taggbox" 
          style={{width:"100%", height:"100%"}} 
          data-widget-id={slice.primary.taggbox_widget_id} 
          data-tags="false"
        ></div>
      </div>
    </section>
  );
};

export default News;

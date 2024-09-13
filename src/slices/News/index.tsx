'use client'
import { dancingScript } from "@/app/components/Header";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `News`.
 */
export type NewsProps = SliceComponentProps<Content.NewsSlice>;

/**
 * Component for "News" Slices.
 */
const News = ({ slice }: NewsProps): JSX.Element => {
  const dancingScriptClassName = dancingScript.className;
  return (
    <section id={slice.primary.uuid || ""} className="section section-md bg-white text-center text-sm-left">
      <div className="shell-wide text-center">
        <h2 className={dancingScriptClassName}>{slice.primary.title}</h2>
        <div className="taggbox" style={{width:"100%", height:"100%"}} data-widget-id={slice.primary.taggbox_widget_id} data-tags="false"></div>
        <script src="https://widget.taggbox.com/embed-lite.min.js" type="text/javascript"></script>
      </div>
    </section>
  );
};

export default News;

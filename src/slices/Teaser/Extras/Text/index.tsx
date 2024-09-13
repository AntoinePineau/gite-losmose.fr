import { dancingScript } from "@/app/components/Header";
import { Content, RichTextField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

export default function Text ({ slice }: TeaserProps): JSX.Element {
  const dancingScriptClassName = dancingScript.className;
  return (
    <div className="cell-sm-12 cell-md-8 cell-lg-8 reveal-flex wow fadeInUp" data-wow-delay=".3s" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp"}}>
      <div className="section-wrap-content-var-1">
        <div className="section-wrap-content-var-1-inner range">
          <h2 className={dancingScriptClassName}>{slice.primary.title}</h2>
          <PrismicRichText field={slice.primary.description} />
          <div className="cell-sm-12 cell-md-6">
            {slice.primary.options.map((item: { title:string; description: RichTextField }) => (
              <div className="group">
                <h3>{item.title}</h3>
                <PrismicRichText field={item.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
          
  );
};
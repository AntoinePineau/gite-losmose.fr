import { dancingScript } from "@/app/components/Header";
import { Content, KeyTextField, RichTextField } from "@prismicio/client";
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
          <div className="cell-sm-12 cell-md-12">
            {slice.variation === "extras" && (
              slice.primary.options.map((item: { title: KeyTextField; description: RichTextField }, index: number) => (
                <div key={item.title ?? index} className="break-inside-avoid mb-8">
                  <h3>{item.title}</h3>
                  <PrismicRichText field={item.description} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
          
  );
};
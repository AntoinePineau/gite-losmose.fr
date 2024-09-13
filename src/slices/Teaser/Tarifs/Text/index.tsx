import { dancingScript } from "@/app/components/Header";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

const Teaser = ({ slice, index, slices, context  }: TeaserProps): JSX.Element => {
  const dancingScriptClassName = dancingScript.className;
  return (
    <div className="cell-sm-10 cell-md-8 cell-lg-5 reveal-flex wow fadeInUp" data-wow-delay=".3s" style={{visibility: "visible", animationDelay: "0.3s", animationName: "fadeInUp"}}>
      <div className="bg-primary section-wrap-content-var-1">
        <div className="section-wrap-content-var-1-inner">
          <h2 className={dancingScriptClassName}>{slice.primary.title}</h2>
          <PrismicRichText field={slice.primary.description} />
          {slice.primary.button.map((item) => (
            <PrismicNextLink field={item.link} className="button button-effect-ujarak button-lg button-secondary-outline button-square">{item.label}</PrismicNextLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teaser;

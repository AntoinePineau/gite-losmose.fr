import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";
import { dancingScript } from "@/app/components/Header";

export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

const Teaser = ({ slice }: TeaserProps): JSX.Element => {
  const dancingScriptClassName = dancingScript.className;
  return (
    <div className="cell-sm-6 cell-md-5">
      <h3 className={dancingScriptClassName}>{slice.primary.title}</h3>
      <PrismicRichText field={slice.primary.description} />
      {slice.variation === "default" && (
        slice.primary.button?.map((item) => (
          <PrismicNextLink key={item.label} className="button button-primary button button-square button-lg" field={item.link}>
            {item.label}
          </PrismicNextLink>
        ))
      )}
    </div>
  );
};

export default Teaser;

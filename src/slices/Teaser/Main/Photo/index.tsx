
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import { Content } from "@prismicio/client";

export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

const Teaser = ({ slice }: TeaserProps): JSX.Element => {
  return (
    <div className="cell-sm-6">
      <div className="box-outline box-outline__mod-1">
        <figure>
          <PrismicNextImage field={slice.primary.image} />
        </figure>
      </div>
    </div>
  );
};

export default Teaser;

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import React from "react";


export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

export default function Photo({ slice }: TeaserProps): JSX.Element {
  return (
    <div className="cell-sm-12 cell-md-4 cell-lg-4 wow fadeInUp" data-wow-delay=".1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
      <div className="post-video post-video-border">
        <div className="post-video__image">
          <PrismicNextImage field={slice.primary.image} />
        </div>
      </div>
    </div>
  );
};

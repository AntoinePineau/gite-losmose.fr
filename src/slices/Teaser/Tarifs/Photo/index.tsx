import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

const Teaser = ({ slice, index, slices, context  }: TeaserProps): JSX.Element => {
  return (
    <div className="cell-sm-10 cell-md-8 cell-lg-7 wow fadeInUp" data-wow-delay=".1s" style={{visibility: "visible", animationDelay: "0.1s", animationName: "fadeInUp"}}>
      <div className="post-video post-video-border">
        <div className="post-video__image">
          <PrismicNextImage field={slice.primary.image} />
        </div>
      </div>
    </div>
  );
};

export default Teaser;

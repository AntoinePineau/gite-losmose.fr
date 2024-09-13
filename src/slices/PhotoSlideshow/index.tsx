import { dancingScript } from "@/app/components/Header";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PhotoSlideshow`.
 */
export type PhotoSlideshowProps =
  SliceComponentProps<Content.PhotoSlideshowSlice>;

/**
 * Component for "PhotoSlideshow" Slices.
 */
const PhotoSlideshow = ({ slice }: PhotoSlideshowProps): JSX.Element => {
  const dancingScriptClassName = dancingScript.className;
  return (
    <section id={slice.primary.uuid||""} className="section section-md bg-white text-center text-sm-left">
      <div className="shell-wide">
        <div className="range range-10 range-middle">
          <div className="cell-sm-6">
            <h3 className={dancingScriptClassName}>{slice.primary.title}</h3>
          </div>
        </div>
        <hr/>
        <div className="isotope-wrap">
          <div className="row isotope" data-isotope-layout="masonry" data-isotope-group="gallery" data-lightgallery="group">
            <div className="col-xs-12 col-sm-6 col-md-3 grid-sizer"></div>
              {slice.primary.photo.map((item) => (
                <div className="col-xs-12 col-sm-6 col-md-3 isotope-item wow fadeInUp" data-filter="Category 1" data-wow-delay=".1s">
                  <a className="portfolio-item thumbnail-classic" href={item.image.url||""} data-size={item.image.dimensions?.width+'x'+item.image.dimensions?.height||""} data-lightgallery="item">
                   <PrismicNextImage field={item.image} width="420" />
                  </a>
                  <figure></figure>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSlideshow;

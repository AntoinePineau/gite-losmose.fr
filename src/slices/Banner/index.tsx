import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Slider from "./Slider";
import Form from "./Form";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice, index, slices, context }: BannerProps): JSX.Element => {
  return (
    <section id={slice.primary.uuid||""} className="section">
      <div className="shell-wide">
        <div className="range range-30 range-xs-center">
          <Slider slice={slice} index={index} slices={slices} context={context}/>
          <Form slice={slice} index={index} slices={slices} context={context}/>
        </div>
      </div>
    </section>
  );
};

export default Banner;

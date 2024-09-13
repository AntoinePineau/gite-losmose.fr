import { Content } from "@prismicio/client";
import Photo from "./Photo";
import Text from "./Text";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Teaser`.
 */
export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

/**
 * Component for "Teaser" Slices.
 */
const Teaser = ({ slice, index, slices, context  }: TeaserProps): JSX.Element => {
  return (
    <section id={slice.primary.uuid||""} className="section section-md bg-white text-center text-sm-left">
        <div className="shell-wide">
          <div className="range range-50 range-xs-center overflow-hidden">
          {slice.primary.image_alignment == 'right' && (
            <>
              <Text slice={slice} index={index} slices={slices} context={context} />
              <Photo slice={slice} index={index} slices={slices} context={context} />
            </>
          )}
          {slice.primary.image_alignment == 'left' && (
            <>
              <Photo slice={slice} index={index} slices={slices} context={context}/>
              <Text slice={slice} index={index} slices={slices} context={context} />
            </>
          )}
          </div>
        </div>
      </section>
  );
};

export default Teaser;

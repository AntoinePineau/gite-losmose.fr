import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Photo from "./Photo";
import Text from "./Text";

/**
 * Props for `Teaser`.
 */
export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

/**
 * Component for "Teaser" Slices.
 */
const Teaser = ({ slice, index, slices, context }: TeaserProps): JSX.Element => {
  return (
    <section id={slice.primary.uuid||""} className="section section-md bg-secondary-4 text-center text-sm-left">
        <div className="shell">
          <div className="range range-50 range-md-justify range-sm-middle">            
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

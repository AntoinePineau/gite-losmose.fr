import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Main from "./Main";
import Extras from "./Extras";
import Tarifs from "./Tarifs";

/**
 * Props for `Teaser`.
 */
export type TeaserProps = SliceComponentProps<Content.TeaserSlice>;

/**
 * Component for "Teaser" Slices.
 */
const Teaser = ({ slice, context }: TeaserProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <Main slice={slice} index={0} slices={[]} context={context}/>
      )}
      {slice.variation === "extras" && (
        <Extras slice={slice} index={0} slices={[]} context={context}/>      
      )}
      {slice.variation === "tarifs" && (
        <Tarifs slice={slice} index={0} slices={[]} context={context}/>      
      )}
    </>
  );
};

export default Teaser;

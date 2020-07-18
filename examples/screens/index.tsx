import GettingStarted from "./GettingStarted";
import SingleStyle from "./SingleStyle";
import MultipleStyles from "./MultipleStyles";
import ResponsiveProps from "./ResponsiveProps";
import ResponsivePropsHook from "./ResponsiveProps";
import PlatformSpecificProps from "./PlatformSpecificProps";
import PlatformResponsiveProps from "./PlatformResponsiveProps";
import SingleStyleHook from "./SingleStyleHook";
import MultipleStylesHook from "./MultipleStylesHook";

const examples = {
  "Getting Started": [
    {
      Comp: GettingStarted,
      title: "Getting Started Example",
      key: "GettingStarted",
    },
  ],
  "styled()": [
    {
      Comp: SingleStyle,
      title: "Single Style",
      key: "SingleStyle",
    },
    {
      Comp: MultipleStyles,
      title: "Multiple Styles",
      key: "MultipleStyles",
    },
    {
      Comp: ResponsiveProps,
      title: "Responsive Props",
      key: "ResponsiveProps",
    },
  ],
  "useStyled()": [
    {
      Comp: SingleStyleHook,
      title: "Single Style Hook",
      key: "SingleStyleHook",
    },
    {
      Comp: MultipleStylesHook,
      title: "Multiple Styles Hook",
      key: "MultipleStylesHook",
    },
    {
      Comp: ResponsivePropsHook,
      title: "Responsive Props Hook",
      key: "ResponsivePropsHook",
    },
  ],
  "os()": [
    {
      Comp: PlatformSpecificProps,
      title: "Platform Props",
      key: "PlatformSpecificProps",
    },
    {
      Comp: PlatformResponsiveProps,
      title: "Responsive Platform Props",
      key: "PlatformResponsiveProps",
    },
  ],
};

export default examples;

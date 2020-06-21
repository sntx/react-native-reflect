import SingleStyle from "./SingleStyle";
import MultipleStyles from "./MultipleStyles";
import ResponsiveProps from "./ResponsiveProps";
import ResponsivePropsHook from "./ResponsiveProps";
import PlatformSpecificProps from "./PlatformSpecificProps";
import PlatformResponsiveProps from "./PlatformResponsiveProps";
import SingleStyleHook from "./SingleStyleHook";
import MultipleStylesHook from "./MultipleStylesHook";

const examples = {
  styled: [
    {
      Comp: SingleStyle,
      title: "Single Style",
    },
    {
      Comp: MultipleStyles,
      title: "Multiple Styles",
    },
    {
      Comp: ResponsiveProps,
      title: "Responsive Props",
    },
  ],
  useStyled: [
    {
      Comp: SingleStyleHook,
      title: "Single Style Hook",
    },
    {
      Comp: MultipleStylesHook,
      title: "Multiple Styles Hook",
    },
    {
      Comp: ResponsivePropsHook,
      title: "Responsive Props Hook",
    },
  ],
  os: [
    {
      Comp: PlatformSpecificProps,
      title: "Platform Props",
    },
    {
      Comp: PlatformResponsiveProps,
      title: "Responsive Platform Props",
    },
  ],
};

export default examples;

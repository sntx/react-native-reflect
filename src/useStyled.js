import { useState, useMemo, useContext, useLayoutEffect } from "react";
import { Dimensions } from "react-native";
import _ from "lodash";

import processAttrs from "./processAttrs";
import processStyles, { processStyle } from "./processStyles";
import { ThemeContext } from "./theme";
import { getWindowWidth } from "./utils";

const getBreakpoint = (breakpoints) => {
  const width = getWindowWidth();

  if (width < breakpoints[0]) return 0;
  if (width < breakpoints[1]) return 1;
  if (width < breakpoints[2]) return 2;
  if (width < breakpoints[3]) return 3;

  return 4;
};

function arrayOrVal(x, index) {
  return _.isArray(x) ? x[index] : x;
}

/**
 * React hook for responsive styles
 */
export default ({ styles = {}, style = {}, attrs = {} }) => {
  const myTheme = useContext(ThemeContext);
  let prevBreakpoint = getBreakpoint(myTheme.breakpoints);

  const objs = useMemo(
    () => ({
      styles: processStyles(myTheme, styles),
      style: processStyle(myTheme, style),
      attrs: processAttrs(myTheme.breakpoints, attrs),
    }),
    [0]
  );

  const getReturnProps = (breakpoint) => ({
    styles: arrayOrVal(objs.styles, breakpoint),
    style: arrayOrVal(objs.style, breakpoint),
    attrs: arrayOrVal(objs.attrs, breakpoint),
    breakpoint,
    theme: myTheme,
  });

  const setIfChanged = (breakpoint) => {
    if (breakpoint === prevBreakpoint) return;

    prevBreakpoint = breakpoint;
    setReturnProps(getReturnProps(breakpoint));
  };

  const [returnProps, setReturnProps] = useState(
    getReturnProps(prevBreakpoint)
  );

  useLayoutEffect(() => {
    const handleWindowResize = () => {
      const breakpoint = getBreakpoint(myTheme.breakpoints);
      setIfChanged(breakpoint);
    };

    Dimensions.addEventListener("change", handleWindowResize);

    return () => {
      Dimensions.removeEventListener("change", handleWindowResize);
    };
  }, [0]);

  return returnProps;
};

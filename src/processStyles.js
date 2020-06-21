import _ from "lodash";
import { getStretchIndex, THEME_KEYS_BY_PROPS } from "./utils";

const PROPERTY_CONFIG_NOT_IN_THEME = "PROPERTY_CONFIG_NOT_IN_THEME";
const breakpointsIsValid = (breakpoints) => {
  if (_.size(breakpoints) !== 4) {
    console.error(
      "Theme breakpoints should be of length 4. Given:",
      breakpoints
    );
    return false;
  }
  return true;
};
/**
 * Get single property config from theme depending on the stylePropKey.
 * Ex: for "paddding" stylePropKey, it returns theme.space propertyConfig
 */
const getThemePropVal = (stylePropKey, theme) => {
  const themeKey = THEME_KEYS_BY_PROPS[stylePropKey];
  if (!themeKey) return PROPERTY_CONFIG_NOT_IN_THEME;
  return theme[themeKey];
};

/**
 * Process single value of property, ex: 0, "100%", "5px", etc.
 */
const processSingleStylePropVal = (singleStylePropVal, themePropVal) => {
  if (!_.isNumber(singleStylePropVal) && !_.isString(singleStylePropVal)) {
    console.error("propertyVal should be a number or string");
    return;
  }

  // non-themed value (ex: flex=1) -> return as it is
  if (themePropVal === PROPERTY_CONFIG_NOT_IN_THEME) return singleStylePropVal;

  if (_.isString(singleStylePropVal) && singleStylePropVal.match(/px/)) {
    // "px" suffix -> convert to number
    return Number(singleStylePropVal.replace("px", ""));
  }

  // theme value (ex: colors["primary"])
  // or literal value (ex: "100%")
  return themePropVal[singleStylePropVal] || singleStylePropVal;
};

const isValidStylePropValArray = (stylePropValArray, theme) => {
  const propertyValSize = _.size(stylePropValArray);
  if (propertyValSize > _.size(theme.breakpoints) + 1) {
    // STODO throw error instead of console.error
    console.error(
      "propertyVal should not have more elements than theme breakpoints",
      stylePropValArray
    );
    return false;
  }
  return true;
};

/**
 * Process style property, for example: padding
 * Returns valid StyleSheet value for property.
 */
const processStyleProp = (stylePropKey, stylePropVal, breakpoint, theme) => {
  const themePropVal = getThemePropVal(stylePropKey, theme);

  // single non-themed value (ex: flex=1) -> return as it is
  if (!_.isArray(stylePropVal) && themePropVal === PROPERTY_CONFIG_NOT_IN_THEME)
    return stylePropVal;

  // single themed value (ex: padding=0) -> process
  if (!_.isArray(stylePropVal))
    return processSingleStylePropVal(stylePropVal, themePropVal);

  // just some validation -> fail if not valid
  if (!isValidStylePropValArray(stylePropVal, theme)) return;

  const stretchIndex = getStretchIndex(
    breakpoint,
    _.size(stylePropVal),
    _.size(theme.breakpoints)
  );

  // array value -> process value for current breakpoint
  return processSingleStylePropVal(stylePropVal[stretchIndex], themePropVal);
};

/**
 * Process single style in style sheet, ex: container: { ... }
 */
const processSingleStyle = (style, breakpoint, theme) => {
  return _.mapValues(style, (property, stylePropKey) => {
    const prop = processStyleProp(stylePropKey, property, breakpoint, theme);
    return prop;
  });
};

/**
 * Creates a new style sheet for a single breakpoing
 */
const processBreakpoint = (oceanoStyles, breakpoint, theme) => {
  return _.mapValues(oceanoStyles, (style) => {
    return processSingleStyle(style, breakpoint, theme);
  });
};
/**
 * returns true if at least one property in style is an array
 */
const styleAreArrays = (style) => !!_.find(style, (s) => _.isArray(s));
/**
 * returns true if at least one style in styles contains an array
 */
const stylesAreArray = (styles) => !!_.find(styles, (s) => styleAreArrays(s));
function processStyles(theme, styles) {
  if (!breakpointsIsValid(theme.breakpoints)) return;
  if (!stylesAreArray(styles)) return processBreakpoint(styles, 0, theme);
  return _.map([0, 1, 2, 3, 4], (breakpoint) =>
    processBreakpoint(styles, breakpoint, theme)
  );
}

export function processStyle(theme, style) {
  if (!breakpointsIsValid(theme.breakpoints)) return;
  if (!styleAreArrays(style)) return processSingleStyle(style, 0, theme);

  return _.map([0, 1, 2, 3, 4], (index) =>
    processSingleStyle(style, index, theme)
  );
}
export default processStyles;

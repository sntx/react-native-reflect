import React from "react";
import _ from "lodash";
import useStyled from "./useStyled";

/*
 * Styled for multiple styles.
 * For example, singleStyle = { color: "red", padding: 10 }
 */
const styledSingle = (name, Component, singleStyle, attrs) => {
  const Styled = ({ children, ...props }) => {
    const { style: style, attrs: attr } = useStyled({
      style: singleStyle,
      attrs,
    });

    // extend styled() style with prop style, this allows creating embedded
    // styled() components
    const myStyle = { ...style, ...props.style };

    return (
      <Component {...attr} {...props} style={myStyle}>
        {children}
      </Component>
    );
  };
  Styled.displayName = name || "Styled";
  return Styled;
};

/*
 * Styled for multiple styles.
 * For example, styles = { containerStyle: { ... }, innerStyle: { ... } }
 */
const styledMultiple = (name, Component, styles, attrs) => {
  const Styled = ({ children, ...props }) => {
    const { styles: style, attrs: attr } = useStyled({ styles, attrs });
    const myStyle = {};

    // extend styled() style with prop style, this allows creating embedded
    // styled() components
    _.each(style, (obj, key) => {
      myStyle[key] = { ...obj, ...props[key] };
    });

    return (
      <Component {...attr} {...props} {...myStyle}>
        {children}
      </Component>
    );
  };
  Styled.displayName = name || "Styled";
  return Styled;
};

/*
 * SINGLE style refers to a single stylesheet
 *
 * MULTIPLE style refers to multiple stylesheets. For example, in
 * react-native-elements, components are styled with multiple style sheets: {
 * containerStyle: { ... }, innerStyle: { ... }, ... }
 */
const getStyleKind = (s) => {
  let kind = "SINGLE";

  for (const prop0 in s) {
    if (_.isPlainObject(s[prop0])) kind = "MULTIPLE";
    break;
  }

  return kind;
};

/**
 * Adds a name to the component for React Dev Tools
 */
const styledNamed = (name, C, s, a) => {
  if (getStyleKind(s) === "MULTIPLE") return styledMultiple(name, C, s, a);
  return styledSingle(name, C, s, a);
};

/**
 * Creates a responsive themed component
 */
export default function styled(...args) {
  // (1) Special Case: first argument is react-native's View component (which is a string)
  if (args[0] === "RCTView") {
    return styledNamed("", ...args);
  }
  // (2) First argument is name of component (used for React dev tools)
  if (_.isString(args[0])) {
    return styledNamed(...args);
  }
  // (3) First argument is Component
  return styledNamed("", ...args);
}

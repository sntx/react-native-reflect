jest.mock("../utils");

import React, { FC } from "react";
import _ from "lodash";
import $ from "jquery";
import { Text, View, ViewProps, StyleProp, ViewStyle } from "react-native";
import "@testing-library/jest-dom";
import styled from "../styled";

import { renderWithTheme, testBreakpoints } from "../testsUtils";

testBreakpoints("t001 single style - no breakpoints", () => {
  const Hello: FC<{}> = (props) => <Text {...props}>Hello</Text>;

  const StyledHello = styled(Hello, {
    fontWeight: "bold",
    fontSize: 20,
  });

  const { firstChild } = renderWithTheme(StyledHello);

  expect(firstChild).toHaveStyle({
    fontWeight: "bold",
    fontSize: "20px",
  });
  expect(firstChild).toMatchSnapshot();
});

testBreakpoints(
  "t002 single style - with breakpoints",
  (breakpoint: number) => {
    const Hello: FC<{}> = (props) => <Text {...props}>Hello</Text>;
    const StyledHello = styled(Hello, {
      fontWeight: "bold",
      color: ["primary"],
      fontSize: [0, 2],
      paddingRight: [1, 3, 5],
      marginLeft: [1, 2, 3, 4],
      marginRight: [1, 1, 2, 3, 4],
    });

    const expectStyles = {
      fontWeight: "bold",
      color: "rgb(255, 0, 0)",
      fontSize: ["12px", "12px", "16px", "16px", "16px"][breakpoint],
      paddingRight: ["3px", "3px", "12px", "48px", "48px"][breakpoint],
      marginLeft: ["3px", "6px", "12px", "24px", "24px"][breakpoint],
      marginRight: ["3px", "3px", "6px", "12px", "24px"][breakpoint],
    };

    const { firstChild } = renderWithTheme(StyledHello);

    expect(firstChild).toHaveStyle(expectStyles);
    expect(firstChild).toMatchSnapshot();
  }
);

testBreakpoints(
  "t003 single style - should merge nested styled() styles",
  (breakpoint: number) => {
    const Comp: FC<{}> = (props) => <View {...props} />;
    const StyledComp1 = styled(Comp, { paddingRight: [1, 2] });
    const StyledComp2 = styled(StyledComp1, { paddingLeft: [0, 1, 2] });

    const expectStyles = {
      paddingRight: ["3px", "3px", "6px", "6px", "6px"][breakpoint],
      paddingLeft: ["0px", "0px", "3px", "6px", "6px"][breakpoint],
      paddingBottom: "5px",
    };

    const { firstChild } = renderWithTheme(StyledComp2, {
      style: { paddingBottom: 5 },
    });
    expect(firstChild).toHaveStyle(expectStyles);
    expect(firstChild).toMatchSnapshot();
  }
);

test("t004 single style - should merge styled() and inline style and attrs", () => {
  const Comp: FC<ViewProps> = ({ ...props }) => {
    return <View {...props} />;
  };
  const StyledComp1 = styled(
    Comp,
    { paddingRight: "1px" },
    { nativeID: "styled-comp-1-native-id" }
  );
  const StyledComp2 = styled(
    StyledComp1,
    { paddingLeft: "2px" },
    { nativeID: "styled-comp-2-native-id" }
  );

  const { firstChild } = renderWithTheme(() => (
    <View>
      <Comp style={{ borderTopWidth: 0 }} testID="comp" />
      <StyledComp1
        style={{ borderLeftWidth: 1, paddingRight: 10 }}
        testID="styled-comp-1-test-id"
      />
      <StyledComp2
        style={{ borderRightWidth: 2 }}
        testID="styled-comp-2-test-id"
      />
    </View>
  ));
  expect(firstChild).toMatchSnapshot();
});

testBreakpoints(
  "t005 single style - responsive attrs",
  (breakpoint: number) => {
    const Comp: FC<{ msg: string }> = (props) => (
      <View>
        <Text>{props.msg}</Text>
      </View>
    );

    const StyledComp = styled(Comp, {}, { msg: ["00", "01", "02", "03"] });
    const { firstChild } = renderWithTheme(StyledComp);
    const textResult = $(firstChild).text();
    const textExpect = ["00", "01", "02", "03", "03"][breakpoint];

    expect(textResult).toMatch(textExpect);
  }
);

test("t006 should merge styled attrs with inline attrs", () => {
  const Comp: FC<{ msg1: string; msg2: string }> = (props) => (
    <View>
      <Text>{props.msg1}</Text>
      <Text>{props.msg2}</Text>
    </View>
  );

  const StyledComp = styled(
    Comp,
    {},
    { msg1: "styled message 1 ", msg2: "styled message 2" }
  );

  // inline attrs should overwrite styled attrs
  const { firstChild } = renderWithTheme(StyledComp, {
    msg2: "inline message 2",
  });

  expect($(firstChild).text()).toMatch("styled message 1 inline message 2");
});

test("t007 multiple styles - no breakpoints", () => {
  const Comp: FC<{
    containerStyle?: StyleProp<ViewStyle>;
    innerStyle?: StyleProp<ViewStyle>;
  }> = (props) => (
    <View style={props.containerStyle}>
      <View style={props.innerStyle} />
    </View>
  );

  const StyledComp = styled(Comp, {
    containerStyle: { paddingLeft: "5px" },
    innerStyle: { paddingLeft: "10px" },
  });

  const { firstChild } = renderWithTheme(StyledComp);

  // containerStyle
  expect($(firstChild).attr("style")).toMatch("padding-left: 5px;");

  // innerStyle
  expect($(firstChild).children().first().attr("style")).toMatch(
    "padding-left: 10px;"
  );
});

testBreakpoints(
  "t008 multiple styles - with breakpoints",
  (breakpoint: number) => {
    const Comp: FC<{
      containerStyle?: StyleProp<ViewStyle>;
      innerStyle?: StyleProp<ViewStyle>;
    }> = (props) => (
      <View style={props.containerStyle}>
        <View style={props.innerStyle} />
      </View>
    );

    const StyledComp = styled(Comp, {
      containerStyle: { paddingLeft: [1, 2] },
      innerStyle: { paddingLeft: [3, 2, 1] },
    });

    const { debug, firstChild } = renderWithTheme(StyledComp);

    // containerStyle
    expect(firstChild).toHaveStyle({
      paddingLeft: ["3px", "3px", "6px", "6px", "6px"][breakpoint],
    });
    expect(firstChild).toMatchSnapshot();

    const grandChild = $(firstChild).children().first()[0];

    // innerStyle
    expect(grandChild).toHaveStyle({
      paddingLeft: ["12px", "12px", "6px", "3px", "3px"][breakpoint],
    });
    expect(grandChild).toMatchSnapshot();
  }
);

test("t009 multiple styles - should merge nested styled() styles - no breakpoints", () => {
  const Comp: FC<{
    containerStyle?: StyleProp<ViewStyle>;
    innerStyle?: StyleProp<ViewStyle>;
  }> = (props) => {
    const { containerStyle, innerStyle, ...other } = props;
    return (
      <View style={containerStyle} {...other}>
        <View style={innerStyle} />
      </View>
    );
  };

  const StyledComp1 = styled(
    "StyledComp1",
    Comp,
    {
      containerStyle: { paddingLeft: 0 },
      innerStyle: { paddingLeft: 1 },
    },
    { testID: "styled-comp-1" }
  );

  const StyledComp2 = styled(
    "StyledComp2",
    StyledComp1,
    {
      containerStyle: { paddingRight: 2 },
      innerStyle: { paddingRight: 3 },
    },
    { testID: "styled-comp-2" }
  );

  const { firstChild } = renderWithTheme(() => (
    <View>
      <StyledComp1 />
      <StyledComp2 />
    </View>
  ));

  expect(firstChild).toMatchSnapshot();
});

testBreakpoints(
  "t010 multiple styles - should merge nested styled() styles - with breakpoints",
  () => {
    const Comp: FC<{
      containerStyle?: StyleProp<ViewStyle>;
      innerStyle?: StyleProp<ViewStyle>;
    }> = (props) => {
      const { containerStyle, innerStyle, ...other } = props;
      return (
        <View style={containerStyle} {...other}>
          <View style={innerStyle} />
        </View>
      );
    };

    const StyledComp1 = styled(
      Comp,
      {
        containerStyle: { paddingLeft: [0, 1] },
        innerStyle: { paddingLeft: [1, 2] },
      },
      { testID: "styled-comp-1" }
    );

    const StyledComp2 = styled(
      StyledComp1,
      {
        containerStyle: { paddingRight: [0, 1, 2, 3, 4] },
        innerStyle: { paddingRight: ["0px", "1px", "2px", "3px", "4px"] },
      },
      { testID: "styled-comp-2" }
    );

    const { firstChild } = renderWithTheme(() => (
      <View>
        <StyledComp1 />
        <StyledComp2 />
      </View>
    ));

    expect(firstChild).toMatchSnapshot();
  }
);

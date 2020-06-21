import * as React from "react";
import _ from "lodash";
import { FlatList, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styled } from "react-native-reflect";
import examples from "./screens";

const Container = styled(View, {
  marginLeft: 4,
  marginTop: 4,
});

const LinkButton = styled(
  Button,
  {
    titleStyle: { textAlign: "left", color: "primary", fontSize: 2 },
    buttonStyle: {
      justifyContent: "flex-start",
      padding: 0,
      paddingBottom: 4,
      marginLeft: 3,
    },
  },
  { type: "clear" }
);

const Title = styled(Text, {
  fontSize: 2,
  color: "black",
  marginBottom: 4,
});

function Link({ title, navigation }) {
  return (
    <LinkButton title={title} onPress={() => navigation.navigate(title)} />
  );
}

function HomeScreen({ navigation }) {
  return (
    <Container>
      {_.map(examples, (section, title) => (
        <View>
          <Title>{`${title}()`}</Title>
          <FlatList
            data={section}
            renderItem={({ item }) => (
              <Link title={item.title} navigation={navigation} />
            )}
          />
        </View>
      ))}
    </Container>
  );
}

const Stack = createStackNavigator();

const screens = _.flatten(
  _.map(examples, (section) =>
    _.map(section, (example) => (
      <Stack.Screen name={example.title} component={example.Comp} />
    ))
  )
);

console.log("screens", screens);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="React Native Reflect Examples"
          component={HomeScreen}
        />
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

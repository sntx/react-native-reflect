import {
  ReflectStyle,
  ReflectStyles,
  ReactNativeStyles,
  ReactNativeStyle,
} from "react-native-reflect";

const styles: ReactNativeStyles = {
  container: {
    padding: 10,
  },
  title: {
    color: "red",
  },
};

const style: ReactNativeStyle = {
  padding: 10,
  backgroundColor: "blue",
};

const reflectStyle: ReflectStyle = {
  padding: [0, 1, 3],
  color: "primary",
};

const reflectStyles: ReflectStyles = {
  container: {
    padding: [0, 1, 3],
  },
  title: {
    color: "primary",
  },
};

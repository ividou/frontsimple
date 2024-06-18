import { useState } from "react";
import Home from "../screens/home";
import NewSubjet from "../screens/newsubjet";
import { BottomNavigation } from "react-native-paper";
import { primaryColor } from "../config/colors";

export default TabsScreens = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "Home",
      title: "inicio",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    {
      key: "NewSubjet",
      title: "Materia",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    NewSubjet: NewSubjet,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: primaryColor }}
      activeColor="red"
      inactiveColor="blue"
    />
  );
};

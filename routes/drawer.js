import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

// stacks
import HomeStack from "./homeStack";
import AboutStack from "./eventStack";
import LogOut from "./logOutStack";
// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  "Strona główna": {
    screen: HomeStack,
  },
  Wydarzenia: {
    screen: AboutStack,
  },
  Wyloguj: {
    screen: LogOut,
  },
});

export default createAppContainer(RootDrawerNavigator);

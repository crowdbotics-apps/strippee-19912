import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList95830Navigator from '../features/NotificationList95830/navigator';
import Settings95829Navigator from '../features/Settings95829/navigator';
import Settings95821Navigator from '../features/Settings95821/navigator';
import UserProfile95819Navigator from '../features/UserProfile95819/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList95830: { screen: NotificationList95830Navigator },
Settings95829: { screen: Settings95829Navigator },
Settings95821: { screen: Settings95821Navigator },
UserProfile95819: { screen: UserProfile95819Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

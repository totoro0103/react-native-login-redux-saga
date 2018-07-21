import { createStackNavigator } from 'react-navigation';
import LoginContainer from '../containers/login/LoginContainer';
import HomeContainer from '../containers/tabar/HomeContainer';
import Splash from '../containers/other/Splash';

const AppStackNavigator = createStackNavigator(
    {
        splash: { screen: Splash },
        login: { screen: LoginContainer },
        home: { screen: HomeContainer },
    }, {
        // see next line
        headerMode: 'none',
    })

export default AppStackNavigator
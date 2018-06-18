import { createStackNavigator } from 'react-navigation';
import LoginContainer from '../containers/login/LoginContainer';
import TabNavigator from '../navigation/TabNavigator';

const AppStackNavigator = createStackNavigator({
    login: LoginContainer,
    tabNavigator : TabNavigator
})

export default AppStackNavigator
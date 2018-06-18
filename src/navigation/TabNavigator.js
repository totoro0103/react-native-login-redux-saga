import { createTabNavigator } from 'react-navigation';
import OverTimeContainer from '../containers/ot/OverTimeContainer';

const TabNavigator = createTabNavigator(
    {
        overTime: OverTimeContainer
    }
)
export default TabNavigator
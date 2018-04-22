import HomeScreen from './screen/HomeScreen'
import CoinDetailScreen from './screen/CoinDetailScreen'
import { StackNavigator } from 'react-navigation';

export default Route = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        CoinDetail: {
            screen: CoinDetailScreen,
        },
    },
    {
        initialRouteName: 'Home',
    },
);
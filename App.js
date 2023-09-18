import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import taskScreen from './screens/taskScreen'
import { createAppContainer, createswitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createswitchNavigator({
  HomeScreen:HomeScreen,
  taskScreen : taskScreen
})

const AppContainer = createAppContainer(AppNavigator)

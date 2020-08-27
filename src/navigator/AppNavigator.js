import React from 'react';
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { connect } from 'react-redux'
import { createReactNavigationReduxMiddleware, createReduxContainer } from 'react-navigation-redux-helpers'
export const rootCom = 'Init'
import WelcomePage from '../pages/WelcomePage';
import HomePage from '../pages/HomePage';
import DetailPage from '../pages/DetailPage'
import ResquestPage from '../pages/ResquestPage';
import AsyncStoragePage from '../pages/AsyncStoragePage';


const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      header: null,
    }
  }
})

const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: DetailPage,
    navigationOptions: {
      // header: null,
    }
  },
  ResquestPage: {
    screen: ResquestPage,
    navigationOptions: {
      tabBarLabel: "fetch"
    }
  },
  AsyncStoragePage: {
    screen: AsyncStoragePage,
    navigationOptions: {
      tabBarLabel: 'local'
    }
  }
},{
  initialRouteName: "HomePage"
})

const NavInit = createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,
}, {
  navigationOptions: {
    header: null
  }
})

export const RootNavigator =  createAppContainer(NavInit)


export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
)

// createReduxContainer
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root')

const mapStateTpProps = state => ({
  state: state.nav
})

export default connect(mapStateTpProps)(AppWithNavigationState)

import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { connect } from 'react-redux'

import PopularPage from '../pages/PopularPage';
import BenefitPage from '../pages/BenefitPage';
import FavoritePage from '../pages/FavoritePage';
import MePage from '../pages/MePage';
import Spendings from '../pages/Spending';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigator/NavigationUtil'
import { BottomTabBar } from 'react-navigation-tabs'
import {  
  Image
} from 'react-native';

const TABS = {
    PopularPage: {
      screen: PopularPage,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({tintColor, focused}) => (
          <Image
              source={require('./assets/feed.jpg')}
              style={{width: 26, height: 26}}
           />
        )
      }
    },
    BenefitPage: {
      screen: BenefitPage,
      navigationOptions: {
        tabBarLabel: 'Community',
        tabBarIcon: ({tintColor, focused}) => (
           <Image
              source={require('./assets/community.jpg')}
              style={{width: 26, height: 26}}
           />
        )
      }
    },
    FavoritePage: {
      screen: FavoritePage,
      navigationOptions: {
        tabBarLabel: 'Tiiiks',
        tabBarIcon: ({tintColor, focused}) => (
          <Image
              source={require('./assets/tiiiks.jpg')}
              style={{width: 26, height: 26}}
           />
        )
      }
    },
    Spendings: {
      screen: Spendings,
      navigationOptions: {
        tabBarLabel: 'Spending',
        tabBarIcon: ({tintColor, focused}) => ( 
          <Image
              source={require('./assets/spending.jpg')}
              style={{width: 26, height: 26}}
           />
        )
      }
    },
    MePage: {
      screen: MePage,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ({tintColor, focused}) => ( 
           <Image
              source={require('./assets/more.jpg')}
              style={{width: 26, height: 26}}
           />
        )
      }
    }
}

class DynamicTabNavigator extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true 
  }
  _tabNavigator () { 
    if (this.Tabs) {
      return this.Tabs
    }
    const {PopularPage, BenefitPage, FavoritePage,Spendings,MePage} = TABS;
    const tabs = {PopularPage, BenefitPage, FavoritePage, Spendings, MePage }
    return this.Tabs = createAppContainer(createBottomTabNavigator(tabs, {
      tabBarComponent: props => {
        return <TabBarComponent theme={this.props.theme} {...props}/>
      }
    }))
  }
  render() {
    const Tab = this._tabNavigator()
    return <Tab/>;
  }
}
class TabBarComponent extends Component{
  constructor(props) {
    super(props)
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    }
  }
  render() {
    return <BottomTabBar
      {...this.props}
      activeTintColor={this.props.theme}
    />
  }
}

const mapStateToProps = state => ({
  theme: state.theme.theme
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(DynamicTabNavigator)

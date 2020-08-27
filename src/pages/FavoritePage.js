import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';


class FavoritePage extends Component {
  render() {
    return (<View>
        <Text>FavoritePage</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage)

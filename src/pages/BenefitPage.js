import React, {Component} from 'react';
import {Text, View, SafeAreaView,Dimensions, StyleSheet } from 'react-native';

import Carousel,{ ParallaxImage }  from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')

import {connect} from 'react-redux';
import actions from '../action/index';

class BenefitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
          image: 'screen1.jpg',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
          image: 'screen2.jpg',
        },
        {
          title: 'Item 3',
          image: 'screen3.jpg',
        },
        {
          title: 'Item 4',
          image: 'screen4.jpg',
        },
      ],
    };
  }

  _renderItem({item, index}, parallaxProps) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
         <ParallaxImage
            source={{ uri: item.image }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            parallaxFactor={0.4}
            {...parallaxProps}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(actions.onThemeChange(theme)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BenefitPage);

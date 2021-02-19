import React, { useState, useEffect, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gallery from 'src/screens/gallery.js';
import ImageView from 'src/screens/imageView.js';

const Stack = createStackNavigator();

const withData = (WrappedComponent, data) => {
  return class extends Component {
      constructor(props) {
          super(props);
      }
      render() {
          return <WrappedComponent { ...this.props } data={data} />;
      }
  }
}

const App = ({ images, fetchImages }) => {
  useEffect(() => {
    !images && fetchImages();
  });
  const galleryWithData = withData(Gallery, images);
  const imageWithData = withData(ImageView, images);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={galleryWithData} />
        <Stack.Screen name="Image" component={imageWithData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



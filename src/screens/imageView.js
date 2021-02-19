import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from 'src/res/styles';

const ImageView = ({ route, navigation, data }) => {
  const { ImageId } = route.params;
  const url = data.find(item => item.id == ImageId).urls.regular;
  return (
    <View style={{ flex: 1 }} >
      <TouchableOpacity style={styles.view} onPress={() => navigation.navigate("Gallery")} >
      <Image
        style={styles.image}
        source={{
          uri: url,
        }}
      />
      </TouchableOpacity>
    </View>
  );
};

export default ImageView


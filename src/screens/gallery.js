import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from 'src/res/styles'

const ImageItem = ({ id, username, description, url, navigation }) => {
   return (<View style={styles.item} >
        <TouchableOpacity onPress={() => navigation.navigate('Image', {ImageId: id})} >
          <Image
            style={styles.thumb}
            source={{
              uri: url,
            }}
          />
          </TouchableOpacity>
          <View style={styles.ImageListItem}>
            <Text style={{marginLeft:10,marginRight:10}}>User: { username }</Text>
            <Text style={{marginLeft:10,marginRight:10}}>Description: { description }</Text>
          </View>
        </View>)
  };

const Gallery = ({ navigation, data }) => {
  const renderItem = ({ item }) => {
    const desc = item.description ? item.description : item.alt_description;
    return (
      <ImageItem id={item.id} username={item.user.username} description={desc} url={item.urls.thumb} navigation={navigation} />
    )
  };
  return (
    <>
      <FlatList
        data={data}
        extraData={navigation}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default Gallery


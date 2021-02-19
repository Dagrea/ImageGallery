import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  thumb: {
    width: 100,
    height: 100,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  view: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
  },
  ImageListItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 3,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
  }
});

export default styles;
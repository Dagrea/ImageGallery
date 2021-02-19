import { combineReducers } from 'redux';
import images from 'src/redux/reducers/images';

const rootReducer = combineReducers({
		images: images,
	});

export default rootReducer;
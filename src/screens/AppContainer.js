import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as imageActions from 'src/redux/actions/images';
import App from 'src/screens/App';

const mapStateToProps = ({images }) => ({
	images: images.items,
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(imageActions,dispatch),
});

export default  connect(mapStateToProps,mapDispatchToProps)(App);
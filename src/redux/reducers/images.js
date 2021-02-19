const initialState = {
	items: null,
	loading: false,
	error: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
	case 'REQUESTED_IMAGES':
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'REQUESTED_IMAGES_SUCCEEDED':
      return {
        items: action.images,
        loading: false,
        error: false,
      };
    case 'REQUESTED_IMAGES_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
	}
}
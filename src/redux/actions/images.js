export const requestImages = () => ({
	type: 'REQUESTED_IMAGES',
})

export const requestImagesSucces = images => ({
	type: 'REQUESTED_IMAGES_SUCCEEDED',
	payload: images,
})

export const requestImagesError = () => ({
	type: 'REQUESTED_IMAGES_FAILED',
})

export const fetchImages = () => ({
	type: 'FETCHED_IMAGES',
})
const fetch = require('node-fetch');

const getPhotos = async albumId => {
	const url = 'https://jsonplaceholder.typicode.com/photos?albumId=';

	if (isNaN(albumId) || albumId == null){
		console.log("Please provide a whole number to find the associated album");
	} else {
		const response = await fetch(url + albumId);
		let photos = await response.json();
		
		let album = [];
		
		photos.forEach( photo => {
			album.push(photo);
		});

		return album;
	}
};

const displayPhotos = album => {
	album.forEach( photo => {
		console.log(`[${photo.id}] ${photo.title}`);
	});
}

module.exports = { getPhotos, displayPhotos };
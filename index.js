const cli = require('commander');

const photos = require('./photoUtils.js');

cli.version('0.1').description('Command line application to display photo ids and titles in an album');

cli
	.command('photo-album <albumID>')
	.description('provide an album ID to list all photos in an album.')
	.action((albumID) => {
		photos.getPhotos(albumID)
			.then( album => {
				photos.displayPhotos(album);
			});
	});

cli.parse(process.argv);
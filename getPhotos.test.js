const photos = require('./photoUtils.js');

describe('get photos from a specific album tests', () => {
	const spyWarn = jest.spyOn( console, 'warn' ); 

	beforeEach(() => {
		fetch.resetMocks();
		jest.spyOn(console, 'log').mockImplementation(() => {});
	});

	afterAll(() => {
	    console.log.mockRestore();
	});

	afterEach(() => {
		console.log.mockClear();
	})

	const testPhoto = {
						"albumId": 1,
						"id": 1,
						"title": "accusamus beatae ad facilis cum similique qui sunt",
						"url": "https://via.placeholder.com/600/92c952",
						"thumbnailUrl": "https://via.placeholder.com/150/92c952"
					};

	it('should call api and return photos', () => {
		fetch.mockResponseOnce(JSON.stringify({
			"albumId": 1,
			"id": 1,
			"title": "accusamus beatae ad facilis cum similique qui sunt",
			"url": "https://via.placeholder.com/600/92c952",
			"thumbnailUrl": "https://via.placeholder.com/150/92c952"
		}));

		photos.getPhotos(1).then( response => {
			expect(response.data).toEqual({
				"albumId": 1,
				"id": 1,
				"title": "accusamus beatae ad facilis cum similique qui sunt",
				"url": "https://via.placeholder.com/600/92c952",
				"thumbnailUrl": "https://via.placeholder.com/150/92c952"
			})
		})
	})

	it('should display album data to console', () => {
		const log = jest.fn();
		log('test')

		photos.getPhotos(1)
			.then( album => {
				photos.displayPhotos(album);
			});

		expect(console.log).toHaveBeenCalled();

	})

});
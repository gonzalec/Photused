'use strict';

/* Services */

angular.module('flickrServices', ['ngResource'])
  .factory('FlickrServices', function($resource){
    return $resource('http://api.flickr.com/services/rest/', 
    {
      method: 'flickr.photosets.getPhotos',
      api_key: '4cb26b7f09f917e2f9154d48087de93d',
      photoset_id: '72157628684242587',
      format: 'json',
      nojsoncallback: 1
    }, 
    {
      save: { method : 'POST' },
      update: { method : 'PUT' }
    }
    );
  }
);


// // Demonstrate how to register services
// // In this case it is a simple value service.
// angular.module('myApp.services', []).
//   value('version', '0.1');

(function() {
  'use strict';
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('GalleryController', function() {
    this.imageIndex = 0;
    this.setCurrent = function(imageNumber) {
      console.log(imageNumber);
      this.imageIndex = imageNumber || 0;
    };
  });

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "http://cl.zdn.io/UuY7/gem-02.gif",
      "http://cl.zdn.io/UuWP/gem-05.gif",
      "http://cl.zdn.io/UuD4/gem-09.gif"
    ]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "http://cl.zdn.io/UvAK/gem-01.gif",
      "http://cl.zdn.io/Uuwd/gem-03.gif",
      "http://cl.zdn.io/UuVP/gem-04.gif",
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "http://cl.zdn.io/Uv3v/gem-06.gif",
      "http://cl.zdn.io/Uu84/gem-07.gif",
      "http://cl.zdn.io/Uuky/gem-10.gif"
    ]
  }];

})();

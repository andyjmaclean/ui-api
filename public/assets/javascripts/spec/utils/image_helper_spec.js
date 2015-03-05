(function() {
  define(['jquery', 'public/assets/javascripts/lib/utils/image_helper.js'], function($, ImageHelper) {
    return describe('ImageHelper', function() {
      beforeEach(function() {
        loadFixtures('image_helper.html');
        return window.image_helper = new ImageHelper();
      });
      describe('.detectOrientation()', function() {
        it('detects landscape', function() {
          return expect(image_helper.detectOrientation($('#landscape .img'))).toBe('landscape');
        });
        it('detects portrait', function() {
          return expect(image_helper.detectOrientation($('#portrait .img'))).toBe('portrait');
        });
        return it('detects squarish (i.e.: neither quite portrait nor landscape)', function() {
          return expect(image_helper.detectOrientation($('#squarish .img'))).toBe('squarish');
        });
      });
      describe('.detectRelativeSize()', function() {
        it('detects taller', function() {
          var $container, $img;
          $container = $('#taller');
          $img = $container.find('.img');
          return expect(image_helper.detectRelativeSize($img, $container)).toBe('taller');
        });
        return it('detects wider', function() {
          var $container, $img;
          $container = $('#wider');
          $img = $container.find('.img');
          return expect(image_helper.detectRelativeSize($img, $container)).toBe('wider');
        });
      });
      describe('.applyOrientationClasses()', function() {
        it('adds `is-landscape` class', function() {
          var $img;
          $img = $('#landscape .img');
          image_helper.applyOrientationClasses($img);
          return expect($img.hasClass('is-landscape')).toBe(true);
        });
        return it('adds `is-portrait` class', function() {
          var $img;
          $img = $('#portrait .img');
          image_helper.applyOrientationClasses($img);
          return expect($img.hasClass('is-portrait')).toBe(true);
        });
      });
      describe('.applyRelativeClasses()', function() {
        it('detects when the image is taller', function() {
          var $container, $img;
          $container = $('#taller');
          $img = $container.find('.img');
          image_helper.applyRelativeClasses($img, $container);
          return expect($img.hasClass('is-taller')).toBe(true);
        });
        return it('detects when the image is wider', function() {
          var $container, $img;
          $container = $('#wider');
          $img = $container.find('.img');
          image_helper.applyRelativeClasses($img, $container);
          return expect($img.hasClass('is-wider')).toBe(true);
        });
      });
      describe('.centerWithinContainer()', function() {
        it('centers vertically', function() {
          var $container, $img;
          $container = $('#centerV');
          $img = $container.find('.img');
          image_helper.centerWithinContainer($img, $container);
          return expect($('#centerV .img')[0].style.marginLeft).toBe("-12.5%");
        });
        return it('centers horizontally', function() {
          var $container, $img;
          $container = $('#centerH');
          $img = $container.find('.img');
          image_helper.centerWithinContainer($img, $container);
          return expect($('#centerH .img')[0].style.marginTop).toBe("-50%");
        });
      });
      return describe('.processImages()', function() {
        it('Finds and processes images', function() {
          var $images;
          $images = $('.img');
          image_helper.processImages({
            img: '.img',
            container: '.img-container'
          });
          return $images.each(function(i, img) {
            expect(img.className.match(/is\-landscape|portrait|squarish/)).not.toBeNull();
            return expect(img.className.match(/is\-taller|wider|equal/)).not.toBeNull();
          });
        });
        return it('Waits for images to load if they have no dimensions', function() {
          var $img;
          $img = $('.img-onload');
          beforeEach(function(done) {
            image_helper.processImages({
              img: '.img-onload',
              container: '.img-onload-container'
            });
            $img.eq(0).css({
              width: 1000,
              height: 600
            }).triggerHandler('load');
            $img.eq(1).css({
              width: 600,
              height: 1000
            }).triggerHandler('load');
            return done();
          });
          return it('processes the images', function() {
            expect($img.eq(0).hasClass('is-landscape'));
            expect($img.eq(0).hasClass('is-wider'));
            expect($img.eq(1).hasClass('is-portrait'));
            return expect($img.eq(1).hasClass('is-taller'));
          });
        });
      });
    });
  });

}).call(this);

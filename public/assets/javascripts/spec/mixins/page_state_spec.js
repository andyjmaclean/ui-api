(function() {
  define(['public/assets/javascripts/lib/mixins/page_state.js'], function(withPageState) {
    return describe('withPageState', function() {
      withPageState = new withPageState();
      describe('Has Filtered', function() {
        describe('by subpath', function() {
          beforeEach(function() {
            return spyOn(withPageState, "withinFilterUrl").and.returnValue(true);
          });
          return it('returns true for hasFiltered', function() {
            return expect(withPageState.hasFiltered()).toBe(true);
          });
        });
        return describe('by querystring', function() {
          beforeEach(function() {
            spyOn(withPageState, "withinFilterUrl").and.returnValue(false);
            return spyOn(withPageState, "getParams").and.returnValue("/england/london/hotels?filters=foo");
          });
          return it('returns true for hasFiltered', function() {
            return expect(withPageState.hasFiltered()).toBe(true);
          });
        });
      });
      describe('Has not Filtered', function() {
        describe('by subpath', function() {
          beforeEach(function() {
            return spyOn(withPageState, "withinFilterUrl").and.returnValue(false);
          });
          return it('returns true for hasFiltered', function() {
            return expect(withPageState.hasFiltered()).toBe(false);
          });
        });
        return describe('by querystring', function() {
          beforeEach(function() {
            spyOn(withPageState, "withinFilterUrl").and.returnValue(false);
            return spyOn(withPageState, "getParams").and.returnValue("/england/london/hotels?search=foo");
          });
          return it('returns true for hasFiltered', function() {
            return expect(withPageState.hasFiltered()).toBe(false);
          });
        });
      });
      describe('Has Searched', function() {
        describe('by querystring', function() {
          beforeEach(function() {
            return spyOn(withPageState, "getParams").and.returnValue("/england/london/hotels?search=foo");
          });
          return it('returns true for hasSearched', function() {
            return expect(withPageState.hasSearched()).toBe(true);
          });
        });
        return describe('by querystring', function() {
          beforeEach(function() {
            return spyOn(withPageState, "getParams").and.returnValue("/england/london/hotels?filters=foo");
          });
          return it('returns true for hasSearched', function() {
            return expect(withPageState.hasSearched()).toBe(false);
          });
        });
      });
      return describe('Get Document Root', function() {
        describe('within a subcategory url', function() {
          beforeEach(function() {
            return spyOn(withPageState, "withinFilterUrl").and.returnValue(true);
          });
          it('in hotels', function() {
            expect(withPageState.createDocumentRoot("/england/london/hotels/rated")).toBe("/england/london/hotels");
            expect(withPageState.createDocumentRoot("/england/london/hotels/apartments")).toBe("/england/london/hotels");
            return expect(withPageState.createDocumentRoot("/england/london/hotels/5-star")).toBe("/england/london/hotels");
          });
          return it('in things to do', function() {
            return expect(withPageState.createDocumentRoot("/england/london/things-to-do/snowboarding")).toBe("/england/london/things-to-do");
          });
        });
        return describe('without a subcategory url', function() {
          beforeEach(function() {
            return spyOn(withPageState, "withinFilterUrl").and.returnValue(false);
          });
          it('in hotels', function() {
            return expect(withPageState.createDocumentRoot("/england/london/hotels/")).toBe("/england/london/hotels/");
          });
          return it('in things to do', function() {
            return expect(withPageState.createDocumentRoot("/england/london/things-to-do/")).toBe("/england/london/things-to-do/");
          });
        });
      });
    });
  });

}).call(this);

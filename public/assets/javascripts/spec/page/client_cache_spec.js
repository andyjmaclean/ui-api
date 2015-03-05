(function() {
  define(['public/assets/javascripts/lib/page/client_cache.js'], function(ClientCache) {
    return describe('ClientCache', function() {
      describe('Initialisation', function() {
        beforeEach(function() {
          return window.clientCache = new ClientCache();
        });
        it('creates a data store', function() {
          return expect(clientCache.cacheStore.length).toBe(0);
        });
        it('creates an expiry time', function() {
          return expect(clientCache.expiryTime).toBeDefined();
        });
        return it('creates a max cache constraint', function() {
          return expect(clientCache.maxCacheSize).toBeDefined();
        });
      });
      describe("Cache API", function() {
        beforeEach(function() {
          return window.clientCache = new ClientCache();
        });
        it('is available', function() {
          expect(clientCache.store).toBeDefined();
          return expect(clientCache.fetch).toBeDefined();
        });
        describe("Storing", function() {
          beforeEach(function() {
            return clientCache.store("/test", {
              content: "some test content"
            });
          });
          return it('adds data to the cache store', function() {
            return expect(clientCache.cacheStore.pop()).toEqual({
              url: "/test",
              data: {
                content: "some test content"
              },
              extras: {}
            });
          });
        });
        return describe("Fetching", function() {
          describe('with a warm cache', function() {
            beforeEach(function() {
              return clientCache.cacheStore = [
                {
                  url: "/test",
                  data: {
                    content: "some test content"
                  },
                  extras: {}
                }, 1, 2
              ];
            });
            it('fetches data to the cache store', function() {
              var cachedData;
              cachedData = clientCache.fetch("/test");
              return expect(cachedData).toEqual({
                url: "/test",
                data: {
                  content: "some test content"
                },
                extras: {}
              });
            });
            return it('moves the returned entry to the top (newest) of the stack', function() {
              var cachedData;
              cachedData = clientCache.fetch("/test");
              return expect(clientCache.cacheStore).toEqual([
                1, 2, {
                  url: "/test",
                  data: {
                    content: "some test content"
                  },
                  extras: {}
                }
              ]);
            });
          });
          describe('with an empty cache', function() {
            beforeEach(function() {
              return clientCache.cacheStore = [];
            });
            return it('returns undefined', function() {
              var cachedData;
              cachedData = clientCache.fetch("/test");
              return expect(cachedData).toEqual(void 0);
            });
          });
          return describe('with an expired cache', function() {
            beforeEach(function() {
              clientCache.cacheStore = [
                {
                  url: "/test",
                  data: {
                    content: "some test content"
                  },
                  extras: {}
                }
              ];
              return spyOn(clientCache, "_isCacheAlive").and.returnValue(false);
            });
            return it('fetches data to the cache store', function() {
              var cachedData;
              cachedData = clientCache.fetch("/test");
              return expect(cachedData).toEqual(void 0);
            });
          });
        });
      });
      describe("Cache expiry", function() {
        beforeEach(function() {
          window.clientCache = new ClientCache();
          return spyOn(clientCache, "_getCurrentTime").and.returnValue(12345);
        });
        it('returns an expired cache', function() {
          clientCache.expiryTime = 12344;
          return expect(clientCache._isCacheAlive()).toBe(false);
        });
        return it('returns a functional cache', function() {
          clientCache.expiryTime = 12346;
          return expect(clientCache._isCacheAlive()).toBe(true);
        });
      });
      describe("Cache Size", function() {
        beforeEach(function() {
          return window.clientCache = new ClientCache();
        });
        it('has space', function() {
          clientCache.cacheStore = [1, 2];
          return expect(clientCache._spaceInCache()).toBe(true);
        });
        return it('is full', function() {
          clientCache.cacheStore = [1, 2, 3];
          return expect(clientCache._spaceInCache()).toBe(false);
        });
      });
      return describe('Creating a new entry', function() {
        beforeEach(function() {
          return window.clientCache = new ClientCache();
        });
        describe('When the cache has space', function() {
          beforeEach(function() {
            spyOn(clientCache, "_spaceInCache").and.returnValue(true);
            clientCache.cacheStore = [1];
            return clientCache.store("/bar", "new page");
          });
          return it('adds the entry to the end of the cache', function() {
            expect(clientCache.cacheStore[0]).toEqual(1);
            return expect(clientCache.cacheStore[clientCache.cacheStore.length - 1]).toEqual({
              url: "/bar",
              data: "new page",
              extras: {}
            });
          });
        });
        return describe('When the cache is full', function() {
          beforeEach(function() {
            spyOn(clientCache, "_spaceInCache").and.returnValue(false);
            clientCache.cacheStore = [1, 2, 3];
            return clientCache.store("/bar", "new page");
          });
          it('adds the entry to the end of the cache', function() {
            return expect(clientCache.cacheStore[clientCache.cacheStore.length - 1]).toEqual({
              url: "/bar",
              data: "new page",
              extras: {}
            });
          });
          return it('removes the oldest entry', function() {
            return expect(clientCache.cacheStore[0]).toEqual(2);
          });
        });
      });
    });
  });

}).call(this);

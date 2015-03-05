(function() {
  define(['public/assets/javascripts/lib/components/range_slider.js'], function(RangeSlider) {
    return describe('RangeSlider', function() {
      describe('Initialisation', function() {
        beforeEach(function() {
          loadFixtures('range_slider.html');
          return window.rangeSlider = new RangeSlider();
        });
        return it('creates a slider', function() {
          return expect($('.noUi-target').length).toBeTruthy();
        });
      });
      describe("An uncapped slider", function() {
        beforeEach(function() {
          return window.rangeSlider = new RangeSlider();
        });
        return it('parses the data attributes correctly', function() {
          var config, input, output;
          input = {
            range: "0,100",
            current: "40,60",
            targets: "foo,bar"
          };
          output = {
            handles: 2,
            connect: true,
            range: ["0", "100"],
            start: ["40", "60"]
          };
          config = rangeSlider._getConfig(input);
          expect(config.handles).toEqual(2);
          expect(config.connect).toEqual(true);
          expect(config.range).toEqual(["0", "100"]);
          return expect(config.start).toEqual(["40", "60"]);
        });
      });
      describe("A capped slider", function() {
        beforeEach(function() {
          return window.rangeSlider = new RangeSlider();
        });
        it('parses the data attributes correctly', function() {
          var config, input;
          input = {
            range: "0,100",
            current: "40,60",
            targets: "foo,bar",
            capLevel: "90"
          };
          config = rangeSlider._getConfig(input);
          expect(config.handles).toEqual(2);
          expect(config.connect).toEqual(true);
          expect(config.range).toEqual(["0", "90"]);
          return expect(config.start).toEqual(["40", "60"]);
        });
        return it('reduces the current amount if above the cap', function() {
          var config, input;
          input = {
            range: "0,100",
            current: "40,95",
            targets: "foo,bar",
            capLevel: "90"
          };
          config = rangeSlider._getConfig(input);
          expect(config.handles).toEqual(2);
          expect(config.connect).toEqual(true);
          expect(config.range).toEqual(["0", "90"]);
          return expect(config.start).toEqual(["40", "90"]);
        });
      });
      return describe("Updating the units", function() {
        beforeEach(function() {
          return window.rangeSlider = new RangeSlider();
        });
        describe("positioned before", function() {
          describe("When the unit is hours", function() {
            var data;
            data = {
              unit: "hours",
              unitPosition: "after"
            };
            it('singularises', function() {
              expect(rangeSlider._addUnitToValue(data, "1")).toBe("1 hour");
              return expect(rangeSlider._addUnitToValue(data, "30")).toBe("30 hours");
            });
            return it('rounds up hours to days', function() {
              expect(rangeSlider._addUnitToValue(data, "60")).toBe("2 days");
              return expect(rangeSlider._addUnitToValue(data, "80")).toBe("3 days");
            });
          });
          return describe("When the unit is fish", function() {
            var data;
            data = {
              unit: "fish",
              unitPosition: "after"
            };
            return it('adds the unit after', function() {
              return expect(rangeSlider._addUnitToValue(data, "30")).toBe("30 fish");
            });
          });
        });
        return describe("positioned after", function() {
          return describe("When the unit is $", function() {
            var data;
            data = {
              unit: "$",
              unitPosition: "before"
            };
            return it('adds it before', function() {
              expect(rangeSlider._addUnitToValue(data, "1")).toBe("$1");
              return expect(rangeSlider._addUnitToValue(data, "2000")).toBe("$2000");
            });
          });
        });
      });
    });
  });

}).call(this);

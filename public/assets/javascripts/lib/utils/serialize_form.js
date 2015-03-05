(function() {
  define(function() {
    var SerializeForm;
    return SerializeForm = (function() {
      var buildObject, patterns, push_counters, self;

      self = SerializeForm;

      push_counters = {};

      patterns = {
        key: /[a-zA-Z0-9_-]+|(?=\[\])/g,
        push: /^$/,
        fixed: /^\d+$/,
        named: /^[a-zA-Z0-9_-]+$/
      };

      self.build = function(base, key, value) {
        base[key] = value;
        return base;
      };

      self.push_counter = function(key, i) {
        if (push_counters[key] === void 0) {
          push_counters[key] = 0;
        }
        if (i === void 0) {
          return push_counters[key]++;
        } else {
          if (i !== void 0 && i > push_counters[key]) {
            return push_counters[key] = ++i;
          }
        }
      };

      function SerializeForm(form) {
        push_counters = {};
        if (form.jquery === void 0) {
          form = $(form);
        }
        return buildObject(form, {});
      }

      buildObject = function(form, formParams) {
        $.each(form.serializeArray(), function() {
          var k, keys, merge, reverse_key;
          k = void 0;
          keys = this.name.match(patterns.key);
          merge = (this.value === 'on' ? true : this.value);
          reverse_key = this.name;
          while ((k = keys.pop()) !== void 0) {
            reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), "");
            if (k.match(patterns.push)) {
              merge = self.build([], self.push_counter(reverse_key), merge);
            } else if (k.match(patterns.fixed)) {
              self.push_counter(reverse_key, k);
              merge = self.build([], k, merge);
            } else {
              if (k.match(patterns.named)) {
                merge = self.build({}, k, merge);
              }
            }
          }
          return formParams = $.extend(true, formParams, merge);
        });
        return formParams;
      };

      return SerializeForm;

    })();
  });

}).call(this);

(function() {
  'use strict';
  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function(val) {
      return val;

  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    if (n === undefined) {
      return array[0];
    } else if(Array.isArray(array)) {
        return array.slice(0, n);
    } else if(array !== typeof(obj)) {
      return [];
    } else if (n !== typeof(number)) {
      return [];
    };
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else if (n > array.length) {
        return array;
    } else if (n === 0) {
        return [];
    } else if(n < 0) {
      return [];
    } else if(Array.isArray(array)) {
        return array.slice(n - 1);
    };
    //   return array;
    // } else if (n < 0) {
    //   return [];
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  // var array = [1, 2, 3, 4];
  // var obj = {name: 'Ash', computer: 'Dell'}
  _.each = function(collection, iterator) {
        if (Array.isArray(collection)) {
          for (var i = 0; i < collection.length; i++) {
            iterator(collection[i], i , collection);
          };
        } else {
          for (var key in collection) {
            iterator(collection[key], key, collection);
          };
        };
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target, start){
    for(var i = 0; i < array.length; i++) {
      if(!array.includes(target)) {
        return -1;
      } else {
        return array.indexOf((target), start);
      };
    };
  };
//predicate checks whether value === true or false;
  _.findIndex = function(array, predicate) {
    for(var i = 0; i < array.length; i++) {

      //predicate = another function that checks true /false;
    }


  }

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    var output = [];
    _.each(collection, function(element) {
      if(test(element)) {
        output.push(element);
      };
    });
    return output;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
     var output = [];
    _.each(collection, function(element) {
      if(!test(element)) {
        output.push(element);
      };
    });
    return output;
  };


  // Produce a duplicate-free version of the array.
  _.uniq = function(array, isSorted, iterator) {
      var unique = [];
      var output = [];
      for (var i = 0; i < array.length; i++) {
        if(unique.indexOf(array[i]) == -1) {
          unique.push(array[i]);
        };
      };
      // if(array.length === 0) {
      //   return [];
      // };
      // _.each(array, function(element, i) {
      //   if(unique.indexOf(element[i]) == -1) {
      //     unique.push(element[i])
      // };
    };





  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  _.reduce = function(collection, iterator, accumulator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

}());

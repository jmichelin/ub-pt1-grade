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
    var predicate = predicate || _.identity;
    for(var i = 0; i < array.length; i++) {
      if(predicate(array[i])) {
        return array.indexOf(array[i]);
      };
      //predicate = another function that checks true /false;
    };
    return -1;
  };

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
  //var array = [1, 2, 3, 4];
  //isSorted =>
  // Produce a duplicate-free version of the array.
  function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
  };
  _.uniq = function(array, isSorted, iterator) {
  var unique = [];
  if (!isSorted) {
    _.each(array, function(element) {
      if(!unique.includes(element)) {
        unique.push(element);
      };
    });
    return unique
  };
  if(isSorted) {
    var trueValue = [];
    var falseValue = [];
    _.each(array, function(element) {
      if(isFunction(isSorted)) {
        if(isSorted(element)) {
          if(!falseValue.includes(element)) {
            falseValue.push(element);
            falseValue[0] = array[0];
            if(!falseValue.includes(element)) {
              trueValue.push(element);
              trueValue.unshift(array[0]);
            };
          };
        };
      };
    });
    return trueValue;
  };
};
  //     var nonReturn = [];
  //     var booleanArray = [];
  //     for (var j = 0; j < array.length; j++) {
  //       if(arguments[1](array[j])) { //now it is checking for the value;
  //         booleanArray.push(array[j]);
  //         booleanArray[0] = array[0];
  //         if(!booleanArray.includes(array[j])) {
  //           nonReturn.push(array[j]);
  //           nonReturn.unshift(array[0]);
  //         };
  //     };
  //   };
  //   return nonReturn; //expect => [1, 2, 3, 4];''
  // };

// //function two(array, value) {
//   console.log(arguments.length);
//   console.log(arguments[1]);
//   console.log(typeof arguments[1]);
// }
//
// two('test', 13)
//
// //can turn arguments into an array (MDN)
// //review typeof




  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var newArray = []
    _.each(collection, function(element, i, collection) {
      newArray.push(iterator(element, i, collection));
      // another way to solve
      // var newItem = iterator(element, i, collection);
      // newArray.push(newItem);
    });
    return newArray
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
    // obj = {a: 1, b: 2, c:3}
    //var array = [{a: 1, b: 2}]
    // for (var key in obj)
      // return _.map(collection, function(value, key, collection) {
      //   return value;
      return _.map(collection, function(goose) {
        var test = {};
        test = goose[key];
        return test;
      });
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
  //  var array = [1, 2, 3, 4, 5, 6]
  // array = 'string'
  _.reduce = function(collection, iterator, accumulator) {
    if(accumulator === undefined) {
      accumulator = collection[0];
      collection = collection.slice(1);  //pass new copy array but return index 1 onward;
      };
      _.each(collection, function(element, i) {
      accumulator = iterator(accumulator, element);
    });
    return accumulator;
  };
/*
function reduce(collection, iterator, accumulator) {
  each(collection, function(element) {
    accumulator = iterator(accumulator, element);
  });
  return acc;
};

*/

  //   if(accumulator === undefined) {
  //     accumulator = collection[0];
  //     for (var i = 1; i < collection.length; i++) {
  //       accumulator = iterator(accumulator, collection[i]);
  //     };
  //     return accumulator;
  //   };
  //   if(!Array.isArray(collection)); {
  //     accumulator = collection[0];
  //     for (var key in collection) {
  //       accumulator = iterator(accumulator, collection[key])
  //     };
  //     return accumulator;
  //   };
  // };



    //rguments.length <= 2) {
    //     _.each(collection, function(element, i) {
    //         accumulator = element + collection[i];
    //     }
    //
    //   return accumulator;
    // });

  //   _.each(collection, function(element, i) {
    //     var sum = 0;
    //       sum = sum + collection[i];
    //     return sum;
    //   });
    // };

// iterator = _.each(collection, function(element, i ) {
    //   sum = accumulator + element;
    // });
    // return sum;

    /*
    //starting point
      //iterator grabs the array information => reduces the element in the array down.
        //but accumulator === starting point.
      //if !accumulator => itarator (starting point)
        //collection is the array, but it grabs the first index value;
      //Need to write 2 different conditional functions
    array = [1, 2, 3, 4]
    var sum = 0;
    for(i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum; => 10;

    // if we use the arguments test, we can have an if statement:
    //if (arguments.length === 2) then we know there is no accumulator being passed and we can start at the iterator
    //(collection, iterator, accumulator)

    */
})();

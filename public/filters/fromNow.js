angular.module('Jester').
  filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
  });

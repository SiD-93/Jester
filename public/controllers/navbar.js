angular.module('Jester')
  .controller('NavbarCtrl', function($scope, Auth) {
    $scope.logout = function() {
      Auth.logout();
    };
  });

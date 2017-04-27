'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
.controller('objectionPortalCtrl', ['$sce', '$scope', '$timeout', function ($sce, $scope, $timeout) {
  $scope.isShow = "false";
  $scope.isShowInfo = "false";

  $scope.frameName = "Test";
  $scope.detailFrame = $sce.trustAsResourceUrl("http://www.google.com") + "&output=embed";

  $scope.showQuestion = function(){
    $scope.isShowInfo = "false";
    $scope.isShow = "true";
  };

  $scope.showInfomation = function(){
    $scope.isShow = "false";
    $scope.isShowInfo = "true";
  };
}]);

angular.module('loginApp').controller('loginCtrl',loginCrtFnt);

loginCrtFnt.$inject = ['$scope','$log', '$window', 'auth'];
var user
function loginCrtFnt($scope, $log, $window, auth){
    $scope.logAuth = function() {
        $log.info('user login', $scope.user.login);
        $log.info('user pwd', $scope.user.pwd);
        $log.info('in DB', auth.checkUser($scope.user.login, $scope.user.pwd));
        if (auth.checkUser($scope.user.login, $scope.user.pwd)){
            $window.location.href = 'loginSuccess.html';
        }
    };
    
    $scope.logAuthObject = function(user){
        $log.info('user login', user.login);
        $log.info('user pwd', user.pwd);
        };
    
    $scope.ListUser = function(){
        $log.info('user list:  ', auth.userList());
        
    };
    
};
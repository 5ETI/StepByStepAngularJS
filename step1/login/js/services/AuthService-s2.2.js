angular. module ('authService', []).service('auth',authFnc);
authFnc.$inject=['$http','$q'];
function authFnc($http,$q) {
    var userMap={};
    userMap['jdoe']='jdoepwd';
    userMap['psmith']='psmithpwd';
    userMap['tp']='tp';
    var fncContainer={
        localAuthAsk:localAuthAsk
    };
    function localAuthAsk(login,pwd){
        var deferred = $q.defer();
        setInterval(function(login,pwd){
            if( userMap[login]==pwd){
                deferred.resolve(true);
            }
            else{
                deferred.reject(false);
            }
            clearInterval(this);
        },3000,login,pwd);
        return deferred.promise;
    }
    return fncContainer;
}
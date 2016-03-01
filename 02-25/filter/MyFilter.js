/**
 * Created by Lixue on 2016/2/25.
 */
var MyModule = angular.module('MyModule',[]);
MyModule.filter('MyFilter',function(){
    return function(item){
        return item + "DingDong"
    }
});
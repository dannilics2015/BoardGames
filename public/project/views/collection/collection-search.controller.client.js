/**
 * Created by danni on 12/5/16.
 */
/**
 * Created by danni on 12/5/16.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("CollectionSearchController", CollectionSearchController);

    function CollectionSearchController($routeParams, CollectionService, UserService, $location) {
        var vm = this;

        vm.username = $routeParams.username;

        vm.logout = logout;

        vm.findAllCollectionsByName = findAllCollectionsByName;

        function findAllCollectionsByName(name) {
            CollectionService.findAllCollectionsByName(name)
                .success(function(collections) {
                    if(collections.length == 0) {
                        alert("No Collection Found");
                    }
                    vm.collections = collections;
                    console.log(vm.collections);
                })
                .error(function() {
                    console.log("Find Collection Error");
                })
        }

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }
    }
})();
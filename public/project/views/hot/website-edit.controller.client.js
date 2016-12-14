/**
 * Created by LiDanni on 10/15/16.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, $http, UserService, $location) {
        var vm = this;

        vm.username = $routeParams.username;

        var gameId = $routeParams.gameId;
        vm.gameId = gameId;

        vm.logout = logout;

        function init() {
            vm.loading = true;
            var url="https://bgg-json.azurewebsites.net/thing/" + gameId;
            $http.get(url)
                .success(function(result) {
                    vm.detail = result;
                    vm.loading = false;
                });
        }
        init();

        function logout() {
            UserService.logout()
                .success(function(){
                    $location.url("/login");
                });
        }

    }
})()
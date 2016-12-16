/**
 * Created by LiDanni on 10/15/16.
 */

(function(){
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, $http, UserService, $location, $sce) {
        var vm = this;

        vm.username = $routeParams.username;

        var gameId = $routeParams.gameId;
        vm.gameId = gameId;

        vm.logout = logout;
        vm.checkSafeHtml = checkSafeHtml;

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

        function checkSafeHtml(html) {
            return $sce.trustAsHtml(html);
        }
    }
})()

/**
 * Created by LiDanni on 12/2/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, $location, $http, UserService, $sce) {
        var vm = this;

        vm.username = $routeParams.username;
        vm.searchGameByName = searchGameByName;
        vm.logout = logout;

        vm.checkSafeHtml = checkSafeHtml;


        //when page load will display top 50 games immediately
        function init() {
            vm.loading = true;
            var url = "https://bgg-json.azurewebsites.net/hot";
            $http.get(url)
                .success(function(result) {
                    vm.games = result;
                    vm.loading = false;
                });

            findUserByUsername();
        }

        init();

        function searchGameByName(name) {
            vm.loading = true;
            var url = "https://bgg-api.herokuapp.com/api/v1/search?query=" + name + "&&type=boardgame&&exact=1";
            $http.get(url)
                .success(function(result) {
                    if(result.items.$.total != 0) {
                        vm.gameID = result.items.item[0].$.id;
                        var url="https://bgg-json.azurewebsites.net/thing/" + vm.gameID;
                        $http.get(url)
                            .success(function(results) {
                                vm.searchResults = results;
                                vm.loading = false;
                            });
                    }
                    else {
                        alert("No Results Found");
                        vm.loading = false;
                    }
                });
        }

        function findUserByUsername() {
            UserService.findUserByUsername(vm.username)
                .success(function (user) {
                    if (user != '0') {
                        vm.user = user;
                    }
                    if (user == '0') {
                        console.log("cannot find user")
                    }
                })
                .error(function () {
                    console.log("find user error")
                });
        }

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
})();
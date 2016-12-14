/**
 * Created by LiDanni on 11/15/16.
 */
(function() {
    angular
        .module("MovieApp", [])
        .controller("MovieSearchController", MovieSearchController);

    function MovieSearchController($http) {
        var vm = this;
        vm.searchMovieByTitle = searchMovieByTitle;

    function searchMovieByTitle(title) {
        // var url="https://bgg-json.azurewebsites.net/thing/" + title;
        var url = "http://bgg-api.herokuapp.com/api/v1/search?query=" + title ;
        $http.get(url)
            .success(function(results) {
                vm.movies= results;
                console.log(vm.movies.items.item.$.id);
            });
    };
    }
})();
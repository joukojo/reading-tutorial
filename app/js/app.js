var learning = angular.module('learning', []);

var learnReadController = learning.controller('learnReadController', function( $scope, $http) {
  console.log('phones', $scope.phones);

  $scope.words = null;
  $scope.word = 'lue sana';
  $scope.index = 0;

  $http.get('https://dl.dropboxusercontent.com/u/20951013/learning/words-2.json').then(function(response) {
        console.log(response.data.words);
        $scope.words = response.data.words;
    });

    // console.log('phones', $scope.words);

    $scope.data = {
      availableOptions: [
        {id: '1', name: 'Taso 1'},
        {id: '2', name: 'Taso 2'}],
      model: 1,
      selectedOption: {id: '1', name: 'Taso 1'} //This sets the default value of the select in the ui
    };


    $scope.click = function() {

      //console.log('clickety');
      //console.log('phones', $scope.words);


      var level = $scope.data.selectedOption.id;
      //console.log('level', level);

      var items =[];
      for( i = 0 ; i < $scope.words.length ; i++ ) {
        //console.log('allwords:', allWords[i].word);

        if( $scope.words[i].length == level ) {
          items.push($scope.words[i].word);
        }
      }
      var newIndex = Math.floor(Math.random()*items.length);

      while( $scope.index == newIndex && items.length > 1 ) {
        newIndex = Math.floor(Math.random()*items.length);
      }
      index = newIndex;
      $scope.word = items[newIndex];

      var audio = $("#player");
      $("#file").attr("src", 'audio/' + items[newIndex] + '.wav');
      audio[0].pause();
      audio[0].load();//suspends and restores all audio element

      //audio[0].play(); changed based on Sprachprofi's comment below

    }

});

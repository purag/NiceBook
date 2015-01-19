var nicebook = function () {
  var db = null;

  this.init = function (cb) {
    db = new database();
    db.open("nicebook", 1, function (status) {
      // database needs an update; repopulate
      if(status === 2){
        var wordClass = new wordlist();
        wordClass.getArray(function (wordData) {
          db.populate("wordlist", wordData, function(){
            return cb();
          });
        });

      // database opened successfully
      } else if(status === 1){
        alert("opened fine");
        return cb();

      // encountered an error
      } else {
        console.log("Encountered error: " + status
              + "in database.open");
        return cb();
      }
    });
  };
};
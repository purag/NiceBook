(function () {
    var myDB = new database();
    myDB.open("nicebook", 1, function () {
        var wordClass = new wordlist();
        wordClass.getArray(function (wordData) {
            myDB.populate("wordlist", wordData);
        });
    });
})();
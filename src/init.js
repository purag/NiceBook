(function () {
    var myDB = new database();
    myDB.open("nicebook", 1);
    // write a callback for open to do this properly!
    myDB.populate();
})();
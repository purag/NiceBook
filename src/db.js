var database = function () {
    var idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
        db = null,
        wordStore = null;

    this.open = function (name, version) {
        console.log("in open");

        var req = idb.open(name, version);

        req.onerror = function (e) {
            return req.errorCode;
        };

        req.onsuccess = function (e) {
            db = e.target.result;
        };

        req.onupgradeneeded = function (e) {
            console.log("in onupgradeneeded");

            db = e.target.result;
            var store = db.createObjectStore("wordlist", {
                keyPath: "words"
            });

            store.transaction.oncomplete = function (e) {
                console.log("in transaction oncomplete");
                wordStore = db.transaction("wordlist", "readwrite").objectStore("wordlist");
            };
        };
    };
    
    this.populate = function(){
        if( wordStore ){
            console.log("in populate");
            var wordClass = new wordlist();
            
            wordClass.getArray(function (wordData) {
                console.log("in getArray");
                console.log(wordData);
                
                for (var i in wordData) {
                    var wordAdd = wordStore.add(wordData[i]);
                    
                    /* wordAdd.onsuccess = function (e) {
                        console.log("added " + wordData[i]);
                    }; */
                }
            });
        } else {
            console.log("Database has not been initialized.");
        }
    };
};
var database = function () {
    var idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
        db = null,
        wordStore = null;

    this.open = function (name, version, cb) {
        var req = idb.open(name, version);

        req.onerror = function (e) {
            return cb(req.errorCode);
        };

        req.onsuccess = function (e) {
            db = e.target.result;
            return cb(1);
        };

        req.onupgradeneeded = function (e) {
            db = e.target.result;
            var store = db.createObjectStore("wordlist", {
                keyPath: "words"
            });

            store.transaction.oncomplete = function (e) {
                return cb(2);
            };
        };
    };

    this.populate = function (table, data, cb) {
        var store = db.transaction(table, "readwrite").objectStore(table);

        addData(0);
        function addData(i) {
            if (i < data.length) {
                store.put(data[i]).onsuccess = function (e) {
                    addData(++i);
                };
            } else {
                return cb(i);
            }
        }
    };
};
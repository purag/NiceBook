var wordlist = function () {
  this.getArray = function (cb) {
    var arr = [],
      file = new XMLHttpRequest();
    file.open("get", chrome.extension.getUrl("lib/swn.min"), true);
    file.onreadystatechange = function (e) {
      if (file.readyState === 4) {
        var t = file.response,
          lines = t.split("\n");
        for (var i = 0; i < lines.length; i++) {
          var temp = lines[i].split("\t");
          arr[i] = {
            type: temp[0],
            id: temp[1],
            pos: temp[2],
            neg: temp[3],
            words: temp[4]
          };
        }
        return cb(arr);
      }
    };
    file.send();
  };
};
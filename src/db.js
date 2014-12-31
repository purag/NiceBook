var words = new XMLHttpRequest();
words.open("get", "lib/swn.min", true);

words.onreadystatechange = function (e) {
    if (words.readyState === 4) {
        var t = words.response,
            lines = t.split("\n"),
            arr = [];
        for (var i = 0; i < lines.length; i++) {
            var temp = lines[i].split("\t");
            arr[i]   = {
                type:  temp[0],
                id:    temp[1],
                pos:   temp[2],
                neg:   temp[3],
                words: temp[4]
            };
        }
        // document.body.innerHTML = arr[117658].words;
        // prints "deflagrate#1". success! need to put it in an indexedDB now
    }
};

words.send();
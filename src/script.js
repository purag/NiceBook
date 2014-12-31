var post = "That's a bad suit. That's a great suit.",
    scores = {
        that: {
            pos: 0,
            neg: 0
        },
        pretty: {
            pos: 1,
            neg: 0
        },
        bad: {
            pos: 0,
            neg: 1
        },
        great: {
            pos: 2,
            neg: 0
        },
        suit: {
            pos: 0,
            neg: 0
        }
    };

function score( text ){
    var sentences = text.split(". "),
        theScore = 0;
    console.log( sentences );
    for( var i=0; i<sentences.length; i++ ){
        var words = sentences[i].split(" ");
        console.log( words );
        for( var j=0; j<words.length; j++ ){
            var word = words[j];
            if( word.indexOf("'") > 0 ){
                word = word.substr(0, word.length - 2);
            } else if( word.indexOf(".") > 0 ){
                word = word.substr(0, word.length - 1);
            }
            word = word.toLowerCase();
            
            if(
                word == "a" || word == "the" || word == "an" ||
                word == "and" || word == "it" || word == "or" ||
                word == "for" || word == "to" || word == "is" ||
                word == "are" || word == "be" || word == "was" ||
                word == "but" || word == "me" || word == "you"
            ){
                continue;
            }
            
            if( scores[word].pos ) theScore += scores[word].pos;
            if( scores[word].neg ) theScore -= scores[word].neg;
        }
    }
    return theScore;
}

alert( score( post ) );
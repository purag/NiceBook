NiceBook
========

A Chrome extension that hides negative content on Facebook.

This is my first venture into Natural Language Processing, specifically Sentiment Analysis. To analyze the tone of passages in this extension, I'm using [SentiWordNet](http://sentiwordnet.isti.cnr.it/).

Pseudo
------
1. Iterate on each piece of content (i.e. facebook post)
2. Iterate on each sentence
3. Iterate on each word
		1. Remove insignificant contraction endings (like 're and 's)
    2. Determine weighted positive/negative score of each word
    3. Ignore common words (prepositions, conjunctions, etc)
    4. Look around the word for negation (not, isn't) or emphasis (very)
5. Average the word scores for the sentence score
6. Average the sentence scores for the passage score
7. Check against threshold negative value and hide

TODO
----
- Public votes on links&mdash;let users vote on whether a link leads to negative content, and hide it for future readers
- Custom negativity treshold (hide extreme negativity, slight negativity, or all negativity)
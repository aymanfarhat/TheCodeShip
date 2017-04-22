Title: Exercise: Alien Language Pattern Matching
Date: 2013-04-01 10:33
Slug: exercise-alien-language-pattern-matching
Summary: As part of my programming workout I was going through some nice Google
code jam exercises and came across an interesting exercise from the 2009
qualification round related to matching words against patterns. Not hard
but interesting to solve.


As part of my programming workout I was going through some nice Google code jam exercises and came across an interesting exercise from the 2009 qualification round related to matching words against patterns. Not hard but interesting to solve.

The problem is explained in detail on the site, you can chec it out here. In a nutshell, we have a set of words for a certain language; At the same time we have a set of string patterns where each pattern can have a number of different interpretations. Based on the words available in the language the program should determine the number of possible interpretations of every pattern. A pattern consists of a number of tokens, each token is either a single lowercase letter or a group of unique lowercase letters surrounded by parenthesis ( and ).

Example:
Consider the pattern (ab)d(dc) that would mean the first letter is either a or b, the second letter is definitely d and the last letter is either d or c. So the pattern (ab)d(dc) can define these 4 possibilities: {add, adc, bdd, bdc}. Now consider a language whose words are {abc, aaa, abd, add, bdc}, the previously mentioned pattern matches 2 words(namely add and bdc) in that language thus it has 4 possibilities and 2 interpretations.

Solution
One way to solve this is to parse all string patterns into lists containing characters and nested lists of characters(to represent the options). For example (ab)d(cd) would be represented as [["a","b"],"d",["c","d"]] in Python. This makes the task of comparing a word against a parsed pattern pretty trivial via a loop over the characters.

To convert a string patter to a list I have the following function which takes a list of string patterns.


```python
def parse_patterns(patterns):
    lines = []

    def getclosing(i,pattern):
        for x in xrange(i,len(pattern)):
            if pattern[x] == ")":
                return x
        return -1

    for pattern in patterns:
        line = []
        i = 0
        
        while i < len(pattern): 
            if pattern[i] == "(":
                j = getclosing(i,pattern)
                
                if j > i and j-i > 2:
                    line.append(list(pattern[i+1:j]))
                    i = j

            elif pattern[i] != ")":
                line.append(pattern[i])
            i += 1

        lines.append(line)

    return lines
```

For every string pattern, move through it character by character. If an alphabetical character is found just add it to a list(line), on the other hand if we come across an opening bracket that means there is options in there. In that case find the index of the closing of that options set via getclosing(), then extract the string between those brackets, convert it to a list and add it to our line list.

Now that the patterns are converted to lists, to check if a word matches a pattern all what we have to do is loop through a word and compare its values with the list. If the current value(e.g. char 'a' in word) is against a nested list at the current index then 'a' must be an element of that list to continue the match. If the character is against another character then they must me equal for the pattern to continue matching.


def checkmatch(word, pattern):
    for i,el in enumerate(word):
        return !(type(pattern[i]) == str and el != pattern[i]) or (type(pattern[i])==list and el not in pattern[i]):
    return True

In order to keep track of how many words each pattern matches we can save total number of matches for every pattern within a list of integers where we can access each pattern's number of matches by index, 0 would be the number of matches for pattern 1 etc...

```python
# Creates a list of 0s with the size of the number of patterns available
matches = [0]*len(p_patterns)
```

All what is left now is for each word in the language compare it against all patterns, if a match occurs increment the total number of matches for the matching pattern. When done print the results.


```python
# Check every word for matching with any pattern
for word in words:
    for i, pattern in enumerate(p_patterns):
        if checkmatch(word,pattern):
            matches[i] += 1

# Printe results
for i in xrange(0,len(matches)):
    print "Case #{0}: {1}".format(i+1,matches[i])
```

Here is the full working program that takes input as specified in the original problem, also available as gist.


```python
# Parses each string patterns to list of strings and lists(options)
def parse_patterns(patterns):
    lines = []

    def getclosing(i,pattern):
        for x in xrange(i,len(pattern)):
            if pattern[x] == ")":
                return x
        return -1

    for pattern in patterns:
        line = []
        i = 0
        
        while i < len(pattern): 
            if pattern[i] == "(":
                j = getclosing(i,pattern)
                
                if j > i and j-i > 2:
                    line.append(list(pattern[i+1:j]))
                    i = j

            elif pattern[i] != ")":
                line.append(pattern[i])
            i += 1

        lines.append(line)

    return lines

# Check if a string matches a pattern represented as a list
def checkmatch(word, pattern):
    for i,el in enumerate(word):
        return !(type(pattern[i]) == str and el != pattern[i]) or (type(pattern[i])==list and el not in pattern[i]):
    return True

f = open('A-large-practice.in')
lines = f.readlines()
f.close()

L, D, N = map(int,lines[0].rstrip('\n').split(' '))

# Get list of all alien words
words = [w.rstrip('\n') for w in lines[1:D+1]]

# Get list of patters and parse them
p_patterns = parse_patterns([w.rstrip('\n') for w in lines[(D+1):(D+N+1)]])

# Keep track of number of matches for each pattern here
matches = [0]*len(p_patterns)

# Check every word for matching with any pattern
for word in words:
    for i, pattern in enumerate(p_patterns):
        if checkmatch(word,pattern):
            matches[i] += 1

# Print results
for i in xrange(0,len(matches)):
    print "Case #{0}: {1}".format(i+1,matches[i])
```

This is a simple solution yet turned out to work very well after I tested it against the large input file. I am currently looking into optimizing the code a looking into a possible more efficient solution. Would love to hear your thoughts about this problem and the code. Have a good day and happy coding!

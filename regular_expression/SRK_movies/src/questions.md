1. How many films has Shah Rukh Khan acted in?
-> inputString.match(/Actor/g).length;

const frequency = (frequencyTable, key) => {
  frequencyTable[key] = frequencyTable[key] | 0; 
  return (frequencyTable[key] += 1) && frequencyTable;
};
 
2. The year where SRK acted in the most number of movies and the number of movies he acted in that year?
const frequencyOfMovies = input.match(/\d{4}.{1,2}Actor/g).join("").match(/\d{4}/g).map(x => parseInt(x)).reduce(frequency, {});
const result = Object.entries(frequencyOfMovies).reduce((max, data) => max[1] > data[1] ? max : data, ["", 0]);

3. List in alphabetical order all the directors that SRK has acted with.

4. List all directors that SRK has worked for more than once

5. Which is the most popular letter that SRK films begin with? Provide a command that gives both the count and the letter?
const frequencyOfFirstLetterOfTitles = input.match(/\n[A-Z]/g).join("").match(/[A-Z]/g).reduce(frequency, {});
const result = Object.entries(frequencyOfFirstLetterOfTitles).reduce((max, data) => max[1] > data[1] ? max : data, ["", 0]);

6. List all the Shah Rukh Khan movies in the order of the year in which they were released. If a year has more than one movie, then it should be listed in reverse alphabetical order?

7. Which director has SRK worked the most with?

8. What is the most frequently occurring first word amongst all the movie titles in which SRK has acted? 
const frequencyOfFirstWordOfTitles = input.match(/\n\w+/g).join("").match(/\w+/g).reduce(frequency, {});
const result = Object.entries(frequencyOfFirstWordOfTitles).reduce((max, data) => max[1] > data[1] ? max : data, ["", 0]);

9. Most frequently occurring word in SRK titles. Amongst ALL the words
const frequencyOfWordsOfTitles = input.match(/\n[^0-9,]+/g).join("").match(/\w+/g).reduce(frequency, {});
const result = Object.entries(frequencyOfWordsOfTitles).reduce((max, data) => max[1] > data[1] ? max : data, ["", 0]);

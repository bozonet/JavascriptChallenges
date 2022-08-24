/*
 * 'funWithAnagrams' 
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY text as parameter.
 * 
 * Task:
 * Find all anagrams in the STRING_ARRAY and return only first of each anagram.
 */

function funWithAnagrams(text) {
    
//preparing the subarrays to using ".push()" from for loop
  let result = text.map((word, index) => {
    return ([index] = []);
  });

  

  //get anagrams to their subarrays
  text.forEach((word, index) => {
   
    for (let i = 0; i < text.length; i++) {

    if(!result[i].includes(text[i])){
        result[i].push(text[i]);
    }
      let sortedWord1 = word.split("").sort().join("");
      let sortedWord2 = text[i].split("").sort().join("");

      if (sortedWord1 === sortedWord2 && index !== i ) {
        return result[i].push(word);
      }
    }
  });

  //get only filled arrays and take the first element of each array
  result = result.filter(array => array.length > 2);
  result = result.map(array => array[0]);


  return result;
}

console.log(
  "test result 1: ",
  funWithAnagrams([
    "code",
    "aaagmnrs",
    "anagrams",
    "doce",
    "code",
    "aaagmnrs",
    "code",
  ])
);
console.log(
  "test result 2: ",
  funWithAnagrams(["poke", "pkoe", "okpe", "ekop", "ekop","abc", "cba", "bac"])
);
console.log(
  "test result 3: ",
  funWithAnagrams([
    "abc",
    "bca",
    "cba",
    "acb",
    "cde",
    "12",
    "21",
    "123",
    "21",
    "21",
    "12",
    "12",
    "12",
    "",
    "",
  ])
);

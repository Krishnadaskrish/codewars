// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
  
    //converting the string in to lowercase ignore words
    str = str.toLowerCase()
    
    //create an objet to keep on track with the word
    
    let sampleLetter = {};
    
    //itreate trough the word
    
    for(let letter of str){
      //if letter is repeting in the word is not the isogram
      
      if(sampleLetter[letter]){
        return false
      }
      
      //otherwise return true
      
      sampleLetter[letter] = true
      
    }
    // if we reach this no repeating letters found
    return true ;
    
    
    
  }
  
  console.log(isIsogram("Dermatoglyphics"));


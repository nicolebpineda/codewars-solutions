// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// My solution
// Take in an array of smiley faces
function countSmileys(arr) {
  
    // Declare count variable to hold valid count of smiley faces
    let smileyCount = 0;
    
    // Iterate over array to count number of valid smiley faces
    for (const face of arr){
      // Declare features for testing
      let eyes;
      let mouth;
      // Set default value for nose because some smiley faces do not have a nose
      let nose = true;    
      
      // If a smiley face has more than one feature, smiley face is invalid
      if (face.length > 3){
        eyes = false;
        mouth = false;
        nose = false;
      }
      
      
      // Check eyes, mouth and nose for valid features
      
      // Check for valid eyes
      if (face[0] == ':' || face[0] == ';'){
        eyes = true
      }else {
        eyes = false;
      }
      
      // Check for valid mouth
      if (face[face.length - 1] == ')' || face[face.length - 1] == 'D'){
        mouth = true
      }else {
        mouth = false;
      }
      
      // If the smiley face does have a nose, check for valid nose
      if (face.length === 3){
        if (face[1] == '-' || face[1] == '~'){
          nose = true
        }else {
          nose = false;
        }
      }
      
      // If eyes, mouth and nose are valid, add 1 to smiley count
      if (eyes === true && nose === true && mouth === true){
        smileyCount++
      }
    }
    
    // Return the total number of smiling faces in the array
    return smileyCount
}
  
// [';)', ':--D'] => 1
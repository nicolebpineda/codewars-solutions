// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// my solutions
function solution(str){
  let split =  str.split('')
  let reverse = split.reverse()
  let newArr = reverse.join('')
  return newArr
}

function solution (str){
  return str
  .split('')
  .reverse()
  .join('')
}

const solution = str => { 
    return str 
    .split('') 
    .reverse() 
    .join('') 
}

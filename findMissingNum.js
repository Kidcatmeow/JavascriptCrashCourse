//Arrays
//find missing number in given array of 1 to 100
//return : integer in the missing number in array

//condition arr[i]+1 

// let arr= [1,2,3,4,5,6,7,8,10]

// const findMissingNum = (arr) => {
//     for (var i = 0; i < arr.length - 1; i++){
//         if(arr[i] + 1 != arr[i+1]) {
//             return arr[i] + 1;
//         }
//     }
//     return false;
// }
// console.log(findMissingNum(arr));


//Initialize the test array
let arr = [1,6,3,4,2,8,9,10]
//return 9 

const findMissingNum = (arr) => {
    //iterating through an array to check element with a certain condition
    //arr[2]+1 != arr[3] 
    //arr[i] arr[i+1]

    arr.sort((a, b) => a - b);

    const missingNumbers =[];

  for (var i=0; i < arr.length - 1;i++){
    if (arr[i]+1 != arr[i+1]){
        const start = arr[i]+1 ;
        missingNumbers.push(start);
    }
  }
  if (missingNumbers.length === 0) {
    return "no number is missing";
  } else {
    return missingNumbers;
  }
}
 
console.log(findMissingNum(arr));



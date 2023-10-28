const arr = [1,2,3,4,5,6,7,7,8,6,10];

const findDup = (arr) => {
    //create a set to store unique numbers
    const observed = new Set();
    const duplicated = [];
    //iterate through the array
    for (let i=0; i<arr.length ; i++){
        //if the set already has 
        if(observed.has(arr[i])){
            duplicated.push(arr[i])
        } else {
            observed.add(arr[i]);
        }
    }

    return duplicated.join(', ');
}

console.log(findDup(arr))
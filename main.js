// Log a statement using console.log()
console.log ('Hello from main.js')

//Variables
//const variable must be initialized and the value cannot change or else error
//should regularly use const unless the variable may change
let age = 25
age = 20
console.log(age)

const salary = 80000
console.log(salary)



//Data Types
//2 types : primitive and non primitive types
//1.Primitive : String,Number,Boolean,Underfined,Null,BigInt,Symbol
//2.Non-primitive: Objects 

//1.1 Strings : sorrounded by quote '' "" ``, sequence of character that represent text value
const name = "Kidcat"
const language = "JavaScript"
const goal = "LSEG"

//1.2 Numbers : integer, float point numbers
const total = 0
const PI = 3.14

//1.3 Boolean : logical entities can have only 1 value , either true of false
const isNewUser = true
const isHungry = false

//1.4 Undefined : variable declared but not assigned
let result
console.log(result)
//we can also explicitly define the variable to be undefined
const nope = undefined
console.log(nope)

//1.5 Null : empty or unknown value 
const data = null

//2.1 Object : a collection of data made of properties and value (properties : value) 
//Properties(Key) can only be String or BigInt , Value can be any data type
const person = {
    'firstName':'Watsamon',
    'lastName':'Phongwanit',
    'age' : 21
}
//to access properties of object use .
console.log(person.firstName)

//2.2 Array : special type of object, a group of entities with same data type and/or order matters[item,item,item] ,
const oddNumbers = [1,3,5,7,9]
//access item in array , use index position
console.log(oddNumbers[0]) //print out 1

//Javascript is a dynamically type language , meaning that you don't need to specify the data type when you
//first declare them , the data type will be automatically assign during execution time
//for example 
let a = 10
a = "Watsamon"
a= console.log(a) // will print the last assigned value --> Watsamon






//Operators
//special symbol used to perform operations on values and variables
//1. Assignment operators
let x = 10
let y = 5

//2. Arithemthic operators : user to perform calculations
//x and y are operands and the + - * / % are operators
console.log(x+y)//10 + 5 =15
console.log(x-y)//10 - 5 =5
console.log(x*y)//10 x 5 =50
console.log(x/y)// 10/5 = 2
console.log(x%y)// giving remainder of 10/5 = 0
console.log(++x)// increment x by 1 = 11
console.log(--x)// decrement x by 1 = 9

//3.comparison operators compare two values and return either true of false
console.log(x = y) // check if x value equal to y value
console.log(x == y)//check if both x value and data type is the same as y
console.log(x != y)//check if x value s NOT equal to y
console.log(x !=+ y)//check if x value and data type is NOT equal to y
console.log(x > y)//check if x is greater than y
console.log(x >= y)//check if x is greater or equal to y
console.log(x < y)//check if x less than y
console.log(x <= y)//check if x is less than or equal to y

//4.Logical Operators
const isValidNumber = x > 8 && 8 > y // true if BOTH operands are true
const isValidNumber2 = x > 8 || 8 > y //true if either is true
const isValid = true
console.log(!isValid) //return false
console.log(isValid)//return true

//5.String Operators
//use + operator to join 2 or more string
console.log('Kidcat'+'Watsamon')

//6.Ternary operator
//return value based on condition
const isEven = 10%2 === 0 ? true : false
//so if 10%2 === 0 is true then assign true to isEven , if not true assign false to isEven





//Type Conversions
//1.Implicit conversion : Javascriopt automatically convert the type
//2.Explicit conversion : manually convert the type

//1.Implicit
console.log(2 + '3') //print 23 and the type will be converted as String after concatenation
console.log(true + '3') //print true3 and the type will be converted as String after concatenation
//numeric strings with arthemetic operators then the type will become numbers
console.log('4'-'2')//print 2 , type become numbers
//non-numeric string with operators , the type will become a special type called 'NaN' (not a number)
console.log('Kidcat'-'Watsamon')//print NaN
//numeric stirng with boolean, true will be treated as 1 , false will be treated as 0 --> number
console.log('4'-false)//print 4
console.log('4'-true)//print 3
//numeric string with null , null treated as 0 --> number
console.log('4'- null)//print 4
//undefine with number --> become Nan
console.log(5 + undefined) // become NaN

//2.Explicit
//Global method Numeric
//use Number , parseInt , parseFloat
console.log(Number('5')) //return number 5
console.log(Number(false)) //return 0
console.log(Number('')) // empty string return 0
console.log(parseInt('5')) 
console.log(parseInt('3.14')) 
//GLobal method String
//use String , .toString()
console.log(String(5)) //return '5'
console.log(String(undefined)) //return 'undefined'
console.log(String(null)) //return 'null'
console.log((5).toString()) //return '5' , will NOT work on null or undefined
//Global method Boolean
//everything else return true except null undefined 0 '' NaN
console.log(Boolean(10))





//Equality
// == allows coercion
// === does not allow coercion
const var1 = "test"
const var2 = "test"
console.log(var1 == var2) //return true
console.log(var1 === var2) //return true
const var3 = 10
const var4 = "10"
console.log(var3 == var4) //return true
console.log(var3 === var4) //return false
//thus it is better to use === bcs there might be causes like
const var5 = null 
const var6 = undefined
const var7 = 0
const var8 = ''
console.log(var5 == var6) //return true
console.log(var7 === var8) //return true




//Conditional statements
//if else else if switch

//few number of choice with more cod ein each choice
// decide among 2 alternatives
const num = 5 
if(num > 0){
    console.log("Number is positive")
} else {
    console.log("Number is negative") 
}
// decide among 3 alternatives
if(num > 0){
    console.log("Number is positive")
} else if (n < 0) {
    console.log("Number is negative") 
} else {
    console.log("Number is zero") 
}

//switch statements
//large number of code with less code in each choice , use switch statement
color = 'red'
switch(color){
    case 'red':
        console.log("Color is red") 
        break
    case 'blue':
        console.log("COlor is blue")
        break
    case 'green':
        console.log("Color is green")
        break
    default:
        console.log("Not a valid color")
}





//Loops
//1. For loop
//for (initializer ; condition ; final-expression){
    //code
//}
let i = 1
for(i=1 ; i<=5 ; i++){
    console.log("Iteration number :"+i)
}
//prints until iteration 5
//i initialized to i then the l,loop check if i is less and equal to five, if true, then the code within the brackets will run, if not the loop stopped

//2.Whie loop
//while (condition){
    //code
    //final expression
//}
let ii = 1
while (ii<=5) {
    console.log("Iteration number :"+ii)
    ii++
} 
//prints until iteration 5

//3.Do..While loop
//The difference is that the do..while loop always execute atleast once bcs the condition comes after the code inside the loop
//do {
    //code
    //final-expression
//} while (condition)
let i2 = 1
do {
    console.log("iteration number:"+ i2)
    i2++
}while(i2 <= 5)
//prints until iteration 6

//4.For...of loop
//use to loop through collection data such as arrays
//for (const item of array){
    //code
//}
const numArray = [1,2,3,4,5]
for (const num of numArray){
    console.log('Iteration number:'+ num)
}
//prints until iteration 5
//in the for of loop , they automatically iterate through array and in each iteration ,assign each value in the array as num then we can do what we want with each value
//like in iteration 1 ,num = 1 , in iteration  , 2 num = 2 and so on
//Advantages : do not keep track of variable , do not need to figure out how to access the element






//Functions
//code designed to perform task , are resuable
//can divide complex problem into smaller tasks and make problem easier to maintain
//function name (parameter 1,paramter2, parameter3){
    //ccode
//}

function greet(){
    console.log('Good morning Kidcat')
}

greet()
greet()
greet()

//username here is called 'parameter'
function greetWithParam(username){
    console.log('Good morning '+username)
}
//these invoked usernames are'arguments'
greetWithParam('Kidcat')
greetWithParam('Mew')
greetWithParam('Yo')


function add(a, b){
    return a + b
}
const sum = add(5,10)
console.log(sum)


const arrowSum = (a,b) => {
    return a + b
}

//Arrow functions = more concise way of writing simple functions
const arrowSum2 = (a,b) => a+b
const addFive = num => num + 5







//Scope//determine accessibility or visibility of variables
//1. BlockScope
//variable declared inside curly braces cnanot be access outside the block
// if(true){
//     const myName = "Kidcat"
// }
// console.log(myName) //error 

if(true){
    const myName = "Kidcat"
    console.log(myName) //works
}


//2. Function scope
//variabled declared inside functions cannot be access outside functions
// function testFn(){
//     const myName = "Mew"
// }
// console.log(myName) // error

function testFn(){
    const myName = "Mew"
    console.log(myName) 
}
testFn() // works
//note that the above 2 worked examples of blockscope and function scope can share the same variable name 

//3. Global Scope
//global variable can be accessible both inside any block and a function
const myNum = 100

if(true){
    const myName = "Kidcat"
    console.log(myName) 
    console.log(myNum)
}

function testFn2(){
    const myName = "Mew"
    console.log(myName) 
    console.log(myNum)
}

testFn2()

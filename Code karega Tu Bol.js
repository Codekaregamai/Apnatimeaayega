// // 1. ways to print in javascript
// //console.log("Hello world");
// //alert("me")
// //document.write ("this is document write")

// // 2. Javascript console API
// //console.log("Hello World", 4 + 6, "Another log");
// //console.warn("this is warning");
// //Console.error("This is an error");

// // 3. Javascript Variables
// //what are variables ?- Containers to store data values

// /*
// Multi
// Line
// comment
// */

// var number1 = 34;
// var number2 = 56;
// //console.log(number1+ number2);

// // 4. Data types in java script
// //Numbers
// var num1 = 455;
// var num2 = 56.76;

// //string
// var str1 = "This is a string";
// var str2 = 'This is also a string';

// //objects
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry: 99.977

// }

// //Booleans
// var a = true;
// var b = false;
// //console.log(a, b);

// //var und = undefined;
// var und;
// //console.log(und);

// var n = null;
// //console.log("null")
// /*
// At a very high level , there are two types of data type in a java script 
// 1. primitive data types: undefined null, number, string, boolean, symbol
// 2. Reference data type : Arrays, objects

// */

// var arr = [1, 2, "string", 4, 5]
// //console.log(arr)

// //Operators in javascript
// // Arthimetic Operators
// var a = 100;
// var b = 10;
// // console.log("The value of a + b is ", a+b);
// // console.log("The value of a - b is ", a-b);
// // console.log("The value of a * b is ", a*b);
// // console.log("The value of a / b is ", a/b);

// //assignment operators
// var c = b;
// //c += 2;
// //c -= 2;//  c = c- 2;
// //c -= 2;
// //c /= 2;
// //c *=2;
// //console.log(c);

// // comparision operator , 34 and 46 is operands and + is operators.
// var x = 34;
// var y = 56;
// // console.log(x ==y);
// // console.log( x <y);
// // console.log(x >=y );
// // console.log(x < y);
// // console.log (x > y);

// // Logical operators

// //logical and
// //console.log(true && true)
// //console.log(true && false)
// //console.log(false && true)
// //console.log(false && false)

// //logical or
// // console.log(true || true)
// // console.log(true || false)
// // console.log( false || false)

// //logical not! ( sach ko jhut or jhut ko sach kar de use logical not khte hai )
// // console.log(!false);
// // console.log(!true);
// // console.log(!false);

// // function in javascript
// //DRY = Do not repeat yourself
// function avg(a, b) {
//     return (a + b) / 2;

// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);
// //console.log(c1, c2)
// /* or function avg(a, b) {
// c = (a + b)/2;
// return c;
// }
// c1 = avg(4, 6);
// c2= avg(14, 16);
// console.log(c1, c2)
// */
// // string always appears as a black colour
// // number always appear as a blue colour

// //conditionals in JavaScript
// /*
// var age = 41;
// if (age > 18){
//     console.log('you can drink water');
// }
// else{ 

//     console.log('you cannot drink water');

// }
// //if-else statement

// //if-else ladder
// age = 25;
// if(age >32){

//     console.log("you are not a kid")
// }
// else if(age >26){
//     console.log( "Bacche nhi rahe");

// }
// else if(age >22){
//     console.log(" Yes Bacche nahi rahe");

// }
// else if (age >18){
//     console.log("18 Bacche nahi rahe");

// }
// else{
//     console.log("Bacche rahe");
// }
// console.log( "End of ladder");
// */

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// //  for(var i =0;i<arr.length;i++){
// //      if (i==2){
// //      //break;
// //      continue;
// //  }
// //     console.log(arr[i])
// //  }

// // arr.forEach(function(element){
// //     console.log(element);

// //})

// // const ac = 0;
// // ac++;
// //ac = ac +1;
// // let j = 10;
// // while(j<arr.length){
// //     console.log(arr[j]);
// //     j ++;
// // }

// // do {
// //     console.log(arr[j]);
// //     j++;
// // } while (j < arr.length);

// // let myArr = ["Fan", "Camera", 34, null, true, "Harry" ]
// // Array Methods
// // console.log(myArr.length);
// // myArr.pop();
// // myArr.push("harry")
// // myArr.shift()
// // const newlen = myArr.unshift("Harry")
// // console.log(newLen);
// // console.log(myArr);

// // String Methods in JavaScript
// let mylovelyString = "Harry is a good boy good good Harry";
// // console.log(mylovelyString.length);
// // console.log(mylovelyString.indexOf("good"))
// // console.log(mylovelyString.lastIndexOf("good"))

// // console.log(myLovelyString.slice(1,4))
// d = mylovelyString.replace("Harry", "Rohan");
// // d = d.replace("good", "bad");
// // console.log(d, mylovelyString)

// // let myDate = new Date();
// // console.log(myDate);

//  let myDate = new Date();
// // console.log(myDate);
// // console.log(myDate.getFullYear());
// // console.log(myDate.getDay());
// // console.log(myDate.getMinutes());
// // console.log(myDate.getHours());
// // Dom Manipulation

// let elem = document.getElementById('click');
// // console.log(elem);

// let elemclass = document.getElementsByClassName("container")
// // console.log(elemclass);
// //elemClass[0].style.background = "yellow"
// elemclass[0].classlist.add("bg-primary")
// elemclass[0].classlist.add("text-success")
// // console.log(elem.innerHTML);
// // console.log(elem.innerText);

// // console.log(elemclass[0].innerHTML);
// // console.log(elem.innerText);

// tn = document.getElementByIdTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para"

// tn[0].appendChild(createdElement);
// // removeChild(element);---> removes an element
// // mdn is a placewhere we can get any methods
// // javascript me elements bnaye ja sakte ahi element k andar



// // for console 
// // document.title
// // 'Code Karega Tu'
// // document.URL
// // 'http://127.0.0.1:5500/index%20javascript.html'
// // document.scripts
// // HTMLCollection(2) [script, script]0: script1: scriptlength: 2[[Prototype]]: HTMLCollection
// // documents.link
// // VM306:1 Uncaught ReferenceError: documents is not defined
// //     at <anonymous>:1:1
// // (anonymous) @ VM306:1
// // document.links
// // HTMLCollection []
// // document.images
// // HTMLCollection []
// // document.domain
// // '127.0.0.1'

// // selecting using Query
// sel = document.querySelector('.container')
// console.log(sel)
// sel = document.querySelectoraALL('.container')
// console.log(sel)

// // Events in javascript

// function clicked(){

//     console.log('The button was clicked')
   
   
//     }
//     //  clicked function used as agar aap uss button pe click kr re ho to kya ho 
    
//     window.onload = function(){
//         console.log ('The socument was loaded')
//     }
//     // Events in javascript
   
// //   firstcontainer.addEventListener('click', function(){
// //       document.querySelectorALL('.container')[1].innerHTML = "<b> We have clicked "
// //      console.log("Clicked on Container")
// //      })

//     // firstContainer.addEventListener('mouseover', function(){
//     //     console.log("Mouse on Container")
//     // })

//     // firstContainer.addEventListener('mouseout', function(){
//     //     console.log("Mouse out of Container");
// //     // })
// //  let prevHTML = document.querySelectorALL('.container')[1].innerHTML;
// //     firstContainer.addEventListener('mouseup' , function(){
// //         document.querySelectorAll('.container')[1].innerHTML = prevHTML;
// //         console.log("Mouse up when clicked on container");
// //     })

// //     firstContainer.addEventListener('mousedown' , function(){
// //         document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
// //         console.log("Mouse up when clicked on container");
//     })

// //   Arrow Function
// function sum(a, b){
//  return a+b;
// }
sum = (a,b)=>{
    return a+b;
}

logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fired</b>"
    console.log("I am your Log")
}
// (a,b)=>{ 
    // this function is called arrow function 
clr = setTimeout(logkaro, 5000);
// use clearInterval/clearTimeout to cacel setInterval/settimeout
// can be used for set tim
// clr = setInterval(logkaro, 2000);

// JAVASCRIPT LocalStorage
// data user k comparison me save karne k liye madad karti hai 

//  json - javascript object notation
// open standard file format which is used to exchange data 

// localStorage
// Storage {name: 'harry', length: 1}

//json

// obj = {name: "harry", length: 1, a: {this: "that \\ "}}
// 
// JSON Script is used to trans[ort data]

// javascript vesrion 

// ECMA Script :- it is used tompush the update on javascript and maintain the standard
// ecmascript ek standard hai jisse javascript ko maintain kiya ja raha hai

//  Tempelate literals - Backlet


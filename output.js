// ========================== OutPut Based Questions ===================

// 1. 
/*
setTimeout(()=>{
     console.log('Outside SetTimeOut') 
  },0)
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
  setTimeout(()=>{
     console.log('Outside SetTimeOut But After Promise') 
  },0)
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
*/
/*
1
2
4
Outside SetTimeOut
timerStart
timerEnd
success
Outside SetTimeOut But After Promise
*/

//2. 
/*
console.log(1)
setTimeout(() => {
    console.log(2)
}, 0);
let promise = new Promise((resolve, reject) => {
    console.log(3)
    resolve('success');
});
promise.then((res) => {console.log(4)})
promise.then((res) => {console.log(5)})
*/
/*
1
3
4
5
2
*/
// 3. 
/*
var x = 10;
function y() {
  console.log(x);
  x = 20;
  setTimeout(() => {
    console.log(x);
  }, 1000);
  var x;
}
y();
*/
/*
undefined
20 ( after 1 second)
*/

// 4.
/*
console.log('start');
setTimeout(() => {
  console.log('setTimeout');
});

Promise.resolve().then(() => {
  console.log('resolve');
});
console.log('end');
*/
/*
start
end
resolve
setTimeout
*/

// 5. 
/*
for(let i=0;i<=5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}
*/
/*
After Each Second it will print (0 to 5)
0
1
2
3
4
5
*/
/*
for(var i=0;i<=5;i++){
    setTimeout(()=>{
        console.log(i)
    },i*1000)
}
*/
/*
After Each Second it will print (6 for 6 times)
6
6
6
6
6
6
*/
/*
for(var i=0;i<=5;i++){
   function solveProbleWithCloser(i){
        setTimeout(()=>{
        console.log(i)
    },i*1000)
   }
   solveProbleWithCloser(i)
}
*/
/*
After Each Second it will print (0 to 5)
0
1
2
3
4
5
*/

// 6.
/*
function z() {
  var b = 900;
  function x() {
    var a = 15;
    function y() {
      console.log(a, b);
    }
    a = 100;
    y();
  }
  x();
}
z();
*/
/*
100 900
*/

// 7. 
/*
const promise1 = new Promise((resolve, reject) => {
   console.log(1);
   resolve('resolve1');
 });

 const promise2 = promise1.then((res) => {
   console.log(res);
 });

 console.log('promise1:', promise1);
 console.log('promise2:', promise2);
 */
/*
1
promise1: Promise { 'resolve1' }
promise2: Promise { <pending> }
resolve1 (It is coming because we resolving promise1)
*/
/*
const promise1 = new Promise((resolve, reject) => {
   console.log(1);
 });

 const promise2 = promise1.then((res) => {
   console.log(res);
 });

 console.log('promise1:', promise1);
 console.log('promise2:', promise2);
 */
/*
1
promise1: Promise { 'resolve1' }
promise2: Promise { <pending> }
*/
// 8. 
/*
const promise1 = new Promise((resolve, reject) => {
   console.log(1);
   resolve('success');
   });

 promise1.then(() => {
   console.log(3);
 });

 console.log(4);
 */
 /*
 1
 4
 3
 */
 
 // 9. 
 /*
 function foo() {
  var a = b = 0;
  a++;
  return a;
}
foo();
console.log( a); 
console.log( b);
*/
/*
It will throw ReferenceError: a is not defined
*/
/*
 function foo() {
  let a = b = 0;
  a++;
  return a;
}
foo();
console.log( typeof a); 
console.log( typeof b);
*/
/*
undefined
number
*/

// 10. 
/*
const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);
{
  numbers.push(i + 1);
}
console.log(numbers);
*/
/*
[5]
*/

// 11.
/*
var b = 1;
function outer() {
  var b = 2;
  function inner() {
    b++;
    console.log(b); 
    var b = 5;
    console.log(b);
  }
  inner();
}
outer();
console.log(undefined+10)
*/
/*
NaN
5
NaN
*/

// 12.
/*
const b = [undefined];
b[2] = 1;
console.log(b);
*/
/*
[ undefined, <1 empty item>, 1 ]
*/

// 13. 
/*
const nums = [1,2,3,4,5,6,7];
nums.forEach((n) => {
    if(n%2 === 0) 
      break;
    console.log(n);
});
*/

/*
It will throw SyntaxError: Illegal break statement
*/

// 14.
/*
function foo() {
  return "I'm the outer function";
};
function test() {
  console.log(bar);
  return foo(); // (First it will search inside it's scope and it found the function. It is hosted function.)
  var bar = "I'm a variable";
  function foo() {
    return "I'm the inner function";
  }
}
console.log(test());
*/
/*
undefined
I'm the inner function 
*/

// 15.
/*
let a = true;
setTimeout(() => {
  a = false;
}, 2000)
while(a) {
  console.log(' -- inside whilee -- ');
}
*/
/*
goes to infinite loop indide-whilee because call stack will be never free to excute settimeout

*/

// 16. 
/*
async function foo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log("C");
}
console.log("D");
foo();
console.log("E");
*/
/*
D
A
E
B
C
*/

// 17.
/*
(function immediateA(a) {
  return (function immediateB(b) {
    console.log(a); // What is logged?
  })(1);
})(0);
*/

/*
0
*/

// 18.
/*
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();
*/
/*
1
0
*/

// 19.
/*
function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?
*/
/*
Count is 0

The log function captures the message variable, which is initially set to "Count is 0" when createIncrement is called.
However, it's important to note that the message variable is not updated dynamically. It captures the value of count at the time the log function is created, not at the time it is called.
*/

// 20.
/*
function ConstCloser() {
  var counter = 0;
  this.incrementFunction = function () {
    counter++;
    console.log(counter);
  };
  this.decrementFunction = function () {
    counter--;
    console.log(counter);
  };
}
var ccIncDec = new ConstCloser(5);

ccIncDec.incrementFunction();
ccIncDec.incrementFunction();
ccIncDec.incrementFunction();
ccIncDec.decrementFunction();
*/
/*
1
2
3
2
*/

// 21. 
/*
console.log("begins");
setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});
*/
/*
begins
promise 2
setTimeout 1
promise 1
setTimeout 2
dot then 1
resolve 1
*/
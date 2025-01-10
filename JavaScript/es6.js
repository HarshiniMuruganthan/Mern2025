/*//ES^=> ECMA script 6 standard 6
//1.variable declarations->refer variables.js
//2.Scope->
// //var-Global scope
//let-Local/Block scope
//const-Global scope
var a =10
const con=3.14
console.log(a)
console.log(con)
{
    let a =20
    let b=30
    console.log(a);
    console.log(b);
}
console.log(a)
console.log(con)
*/

/*//3.class and objects
class ClassEg{
    constructor(){
        this.a=10
    }
   //4.Arrow functions
   funInClass= ()=>{
         console.log(this.a)
   }

}
obj=new ClassEg()
console.log(obj.funInClass())
*/

/*.Ternary operator
a=10
console.log((a%2==0)?"Even":"Odd")
*/

/*
//Sread operator
a=[10,20,30,40]
b=[50,60,70]
c=[...b,...a]
console.log(c);
*/

/*7.rest operator[...]
function restOpEg(a,b,...arg)
{
    console.log(a)
    console.log(b)
    console.log(arg)

}
restOpEg(10,20,30,40,50,...arg);
*/

/*8.Destructing Operator
var array=[10,20,30]
var[a,b,c,d]=array
console.log(a,b,c);
*/

/*
//9.Hoisting
//variable hoisting
console.log(a);
var a=10;
console.log(b);
let b=10;
*/

/*
//2.Function Hoisting
console.log(fun());
function fun(){
    return 10
}
*/

/*//Primitive Datatypes
a="SECE"
console.log(a)
b=true
console.log(b)
//checking the type of variable
console.log(typeof(a))

//Secondary Datatypes(object)
array=['a',10,true,[20,30],"Sri Eshwar"]
console.log(array)
*/

/*//first way of declaring object
obj={
    firstname:"Sri",
    lastname:"Eshwar",
}
console.log(obj)
console.log(typeof(obj))
console.log(obj["lastname"])
*/

/*//2 way of declaring object
obj1={}
console.log(obj1)
console.log(typeof(obj1))
obj1["dept"]="CSE"
obj1['sec']="A"
console.log(obj1)
*/

/*//3 way of declaring an obj
obj2=new Object()
console.log(obj2);
obj2.count=70
obj2.abs=1
totalPresentCount=obj2.count-obj2.abs
console.log("Present",totalPresentCount)
console.log(obj2)
*/

//Set
set=new Set(["llo",1,2,"SECE","44"])
console.log(typeof(set))
console.log(set);
console.log(set[0]);//cannot use this format to print the frst word
set.add("querty keyboard")
console.log(set);
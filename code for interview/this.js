// const obj={
//     name:"sachin",

//     getName(){
//         const name = "Prakash";
//         return this.name;
//     }
// }

//obj.getName(this) this points to obj 
//this keyword help karta hai methods ko objects ki properties ko access krne mai
//also help in code reusesilbity
//{name: 'sachin', getName: [Function: getName]}
// sachin will be printed ?? beacuse this points to jo dot ke left side mai hoga 

//this is an object that the function is a property of

//whenever we run javascript file then it create a global excecution context which gives access to two things
//this and window 
//function ec gives access to this and arguments
// console.log(this===window) true

///demostaration of this keyword for code resusibility
const obj1 = {
  name: "code for interview",

  getName() {
    return this.name
  },
  getYoutubeChannel() {
    return this.getName() + " youtube channel";
  }
}

// console.log(obj1.getName());
//code for interview
// console.log(obj1.getYoutubeChannel());
//code for interview youtube channel

//dynamic lexical scoping of this keyword
const obj2={
    name:"code for interview",
    getName(){
      console.log("getName",this);
        function getYoutubeChannelName(){
            console.log("getYoutubeChannelName",this.name);
            //undefined because this here points to window object not to obj2 ideally it should point to obj2 because getYoutubeChannelName is inside getName function but in js this keyword works on runtime basis not on lexical scoping basis
            //to solve this problem we have 3 solutions

            //1.arrow function // arrow function mai this apne surrounding se leta hai yani getName function se
            //jo getName function ka this hai yani obj2 wo hi getYoutubeChannelName function ka this bhi ban jayega

            //2.bind method //arrow function aane ke baad bind method kaam mai nahi aata
            //3.self variable ///we can store the reference of this in a variable and use that variable inside the nested function
            //4.call and apply method
        }
        return getYoutubeChannelName();
    }
};
//this is an object that the function is a property of 
console.log(obj2.getName());

//sol1`arrow function

// const obj2={
//     name:"code for interview",
//     getName(){
//       console.log("getName",this);
//         const getYoutubeChannelName=()=>{
//             console.log("getYoutubeChannelName",this.name);                      
//         }
//         return getYoutubeChannelName();
//     }
// };
// console.log(obj2.getName());


const object1={
    name:"sachin",
    getName(x,y){
        return this.name + x+y;
    }
}

const object2={
    name:"adhikari"
    //how to get getName function here
}

//function borrowing
//call method
console.log(object1.getName.call(object2,"lendi","banda"));//adhikari

//apply method
console.log(object1.getName.apply(object2, ["lendi", "banda"]))


//bind 
//it return an function and if u dont want to invoke immediately and call it later then u can store it in varible

var func = object1.getName.bind(object2, "lendi", "banda")
console.log(func)



function getName(){
    return this.name;
}

var obj={
    name:"code for interview"
}

console.log(getName.call(obj))
//it will print code for interview because 
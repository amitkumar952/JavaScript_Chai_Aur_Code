let myHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`spidy power is ${this.spiderman}`);
  }
}

Object.prototype.hitesh = function(){
  console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
  console.log(`Hitesh says Hello`);
}

//myHeros.heyHitesh();
//heroPower.heyHitesh();
// heroPower.hitesh();
//myHeros.hitesh();

//inheritance
const User = {
  name: "Chai",
  email: "chai@google.com"
}

const Teacher ={
  makeVideo: true
}


const TeachingSupport ={
  isAvailable: false

}

const TASupport ={
  makeAssignment: 'js assignment',
  fullTime: true,
  __proto__: TeachingSupport
}
Teacher.__proto__ = User


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()

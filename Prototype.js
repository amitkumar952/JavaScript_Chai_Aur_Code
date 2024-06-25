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

myHeros.heyHitesh();
//heroPower.heyHitesh();
// heroPower.hitesh();
//myHeros.hitesh();

//inheritance

const Teacher ={
  makeVideo: true
}


const TeacherSupport ={
  isAvailable: false

}

const TASupport ={
  makeAssignment: 'js assignment',
  fullTime: true
}
// there is nothing as class in js for oops like in pyhton 
//* BAsic objet
// const circle = {
//     radius:1,
//     location :{
//                 x:1,
//                 y:1,
//                 },
//     draw: function (){
//         console.log("draw circle with radius")
//     }
// }
//? here radius and location is properties and darw is a method;

// circle.draw();
// console.log(circle.location.x);


// *2 function factory

// function createCircle(radius){
//     return {
//         radius :radius,
//         draw: function(){
//             console.log("draw")
//         }

//     }
// }
// const circle = createCircle(5);
// circle.draw();

// *3 Constructor
function Circle2(radius){
    console.log(this)
    this.radius2 = radius;
    this.draw2 = function(){
        console.log("draw2")
    }

}
const circle_object = new Circle2(10);
circle_object.draw2()

//? "new" is mandatory as new creats a new blank object wich we use by "this" element, if not used "this" refer to global widow object;
// we can check the constructor using 
console.log(circle_object.constructor)
// while this generate default constrctorior Object
// console.log(circle.constructor)

// works same as line 42 with empty object instance
Circle2.call({},5)

// works same as line 42 with parameter can be passd in an array
Circle2.apply({},[1])
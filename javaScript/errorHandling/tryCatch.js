// try{
//     console.log( a + b );
// } catch(err){
//     console.log(err);
//     console.log("There was an error");
// }
// console.log("My program does not stop");
try{
    throw new Error;
} catch(err){
    console.log(err);
    console.log("There was an error");
}
console.log("My program does not stop");
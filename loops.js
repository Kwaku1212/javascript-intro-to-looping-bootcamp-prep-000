function forLoop(trying){
  for (let i = 0; i < 25; i++) {
    if(i === 1) {
      console.log("I am " + i + " strange loop.")
    }
    else {
      console.log(`I am ${i} strange loops.`)
      }   
  }
}
var trys = []
forLoop(trys)

function whileLoop(number) {
  while(number > 0) {
    console.log(--number)
  }
  console.log("Done")
}
whileLoop(10)

function doWhileLoop(something){
  do {
    console.log("some")
  } while (array.length > 0 && maybeTrue())
  return something
}
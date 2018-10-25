// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i in arr) {
    if (arr[i] === "Waldo") {

      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found him at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
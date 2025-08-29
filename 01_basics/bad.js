// function isClean(review) {
//   return !(
//     review.includes("dang") ||
//     review.includes("shoot") ||
//     review.includes("heck")
//   );
// }

// export { isClean };
// ES6+ way of writing the same function
const isClean = (review) => 
  // "some()" → checks if AT LEAST one element in the array satisfies the condition
  !(["dang", "shoot", "heck"].some(
    word => review.includes(word) // arrow function: return true if "review" contains the word
  ));

// Example:
// review = "This game is dang fun!"
// some() → finds "dang" in the array → true
// !true → false  (so it's NOT clean)

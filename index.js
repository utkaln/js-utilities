// Array Filter
// Example Situation : From the given array find scores higher than equals 90
var scores = [72, 92, 55, 45, 97, 93, 91, 90]
var grade_a_list = scores.filter(score => score >= 90)
console.log(`grade_a_list => ${grade_a_list}`)

// Array Mapping
// Example Situation : Convert each item of the array list to squared values
var scores = [2,3,4,5,6,7]
var squared_scores = scores.map(num => num * num)
console.log(`squared_scores => ${squared_scores}`)

// Flatten Arrays
const nestedElements = ["Apples", ["Banana", "Milk"], "Coffee", ["Pepper", ["Shrimp", "Bread"]]]
var flattened_elements = nestedElements.flat()
console.log(`flattened_elements => ${flattened_elements}`)



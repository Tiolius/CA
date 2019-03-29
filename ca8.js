/*We wrote a function, smallestPowerOfTwo(), which takes in an array.
Within our function, we create a new array results. We loop through the argument array and push
in the smallest power of two which is greater than the current element.*/
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
    // The 'outer' for loop:
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];

        // The 'inner' while loop:
        // We needed to create a new variable!
        let j = 1;
        while (j < number) {
            j = j * 2;
        }
        results.push(j);
    }
    return results
};

console.log(smallestPowerOfTwo(numbers));
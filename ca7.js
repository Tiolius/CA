function convertToBaby(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 'baby ' + arr[i];
    }
    return arr;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals));
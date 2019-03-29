/*Write a function declineEverything() that takes in an array of strings and, using .forEach(),
loops through each element in the array and calls politelyDecline() with each of them.*/
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

function declineEverything(arr) {
    arr.forEach(politelyDecline);
}

declineEverything(veggies);

function acceptEverything(arr) {
    arr.forEach(function(veg) {
        console.log('Ok, I guess I will eat some ' + veg + '.');
    })
}

acceptEverything(veggies);
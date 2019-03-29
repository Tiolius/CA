/*Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format:
{speciesName: 'shark', numTeeth: 50 }
and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
You’ll need to access each object’s .numTeeth property. Feel free to either write a named comparison function,
or use an anonymous function for your argument to .sort().*/
const speciesArray = [{speciesName: 'shark', numTeeth: 50},
    {speciesName: 'dog', numTeeth: 42},
    {speciesName: 'alligator', numTeeth: 80},
    {speciesName: 'human', numTeeth: 32}];

function sortSpeciesByTeeth(obj) {
    obj.sort(function (a,b) {
        if (a.numTeeth > b.numTeeth) {
            return 1;
        }
        if (a.numTeeth < b.numTeeth) {
            return -1;
        }
        return 0;
    });
    return obj;
}

console.log(sortSpeciesByTeeth(speciesArray));
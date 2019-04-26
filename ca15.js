const _ = {
    clamp: function (number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        return Math.min(lowerClampedValue, upper);
    },
    inRange: function (number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if ( start > end ) {
            let temp = end;
            end = start;
            start = temp;
        }
        return number > start && number < end;
    },
    words: function (string) {
        let str = ''+string;
        return str.split(' ');
    },
    pad: function (string, length) {
        if (length <= string.length) {
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length)/2);
        const endPaddingLength = Math.floor(length - string.length -startPaddingLength);
        return ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    },
    has: function (object, key) {
        const hasValue = object[key];
        return hasValue !== undefined;
    },
    invert: function (object) {
        let invertedObject;
        for (let key in object) {
            const originalValue = object[key];
            invertedObject = {originalValue: key}
        }
        return invertedObject;
    },
    findKey: function (object, predicate) {
        for (let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if (predicateReturnValue) {
                return key;
            }
            return undefined;
        }
    },
    drop: function (array, number) {
        if (number === undefined) {
            number = 1;
        }
        return array.slice(number);
    },
    dropWhile: function (array, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, array);
        };
        let dropNumber = array.findIndex(cb);
        return this.drop(dropNumber);
    },
    chunk: function (array, size) {
        if (size === undefined) {
            size = 1;
        }
        let arrayChunks = [];
        for (let i =0; i < array.length; i+= size) {
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};


console.log(_.clamp(2,1,3));
console.log(_.inRange(2,1,3));
console.log(_.words('hello word im here'));
console.log(_.pad('hi',5));
console.log(_.has({"key": "value"}, "key"));
console.log(_.invert({originalKey: "originalValue"}));
console.log(_.drop([1,2,3,4,5,6,7,8], 5));
console.log(_.chunk([1,2,3,4,5,6,7,8]));












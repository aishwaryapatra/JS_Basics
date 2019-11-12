/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array,i) => {
	// Write your code here
	if (!Array.isArray(array))
        return null;
    i = ~~i;
    if (i >= array.length)
        return array;
    if (Array.isArray(array[i])) {
        return flatten(array.slice(0, i)
            .concat(array[i], array.slice(i + 1)), i);
    }
    return flatten(array, i + 1);
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;

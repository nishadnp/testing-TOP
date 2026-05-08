
export function analyzeArray(array) {

    arrayLength = array.length;

    const sortedArray = array.sort();

    return {
        average: sortedArray[Math.floor(arrayLength / 2)],
        min: sortedArray[0],
        max: sortedArray[arrayLength - 1],
        length: arrayLength,
    }    
}
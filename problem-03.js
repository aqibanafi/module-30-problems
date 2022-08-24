let sum = 0;
const numbers = [11, 5, 4, 9, 45, 34, 16];
const squareNumbers = (array) => {
    for(i = 0; i < array.length; i ++){
        const square = Math.pow((array[i]),2);
        sum+= square;
    }
    return sum;
}

const result = squareNumbers(numbers);
console.log(result);
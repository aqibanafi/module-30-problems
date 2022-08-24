const newArray = [];
const friendName = ['Abdullah', 'Sakib', 'Roman', 'Kajol', 'Aminoor', 'Aditi', 'Sabera', 'Mehedi'];
const evenFriend = (array) => {
    for(i = 0; i < array.length; i++){
        if(array[i].length % 2 === 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const result = evenFriend(friendName);
console.log(result);
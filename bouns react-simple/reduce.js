const nums =[12,25,37,29,100];
nums.map(num => num*2);
nums.filter(num => num>20);
nums.find(num => num >23);
const total = nums.reduce((sum, num) => {
    console.log(sum,num);
  return sum+num
}
, 0);
console.log(total);

const friends = [
    {name:'zihad',id:10},
    {name:'eto',id:20},
    {name:'janat',id:30},
    {name:'sadia',id:40}

];
const friendsArray = friends.reduce((sum,friend) =>{
    console.log(sum,friend);
    return sum+friend.id;
},0);
console.log(friendsArray);
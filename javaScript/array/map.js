const items = [
    {name : 'bike' , price : 100},
    {name : 'TV' , price : 200},
    {name : 'Album' , price : 10},
    {name : 'Book' , price : 5},
    {name : 'Phone' , price : 500},
    {name : 'Computer' , price : 1000},
    {name : 'Keyboard' , price : 25},
]
/*the difference between map and forEach is ,
forEach changed items in current array while map will add it new array */
const itemName = items.map((item)=>{
    return item.name;
})
console.log(itemName);
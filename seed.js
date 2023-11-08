const mongoose = require('mongoose');
const product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farm').then(()=>{
     console.log('Connection to db online');
})
.catch(err =>{
    console.log('oh no error');
    console.log(err);
})


// const p = new product({
//     name:'Apple',
//     price :1.99,
//     category:'fruit'

// })

// p.save()
// .then(p=>{
//     console.log(p)
// })
// .catch(e=>{
//     console.log(e);
// })




//insert many 


const seed = [{
    name: 'Fairy Eggplant',
    price: 1.00,
    category: 'vegetable'
},
{
    name: 'Organic Goddess Melon',
    price: 4.99,
    category: 'fruit'
},
{
    name: 'Organic Mini Seedless Watermelon',
    price: 3.99,
    category: 'fruit'
},
{
    name: 'Organic Celery',
    price: 1.50,
    category: 'vegetable'
},
{
    name: 'Chocolate Whole Milk',
    price: 2.69,
    category: 'dairy'
},
]

product.insertMany(seed)
.then(res =>{
    console.log(res);
})
.catch(e =>{
    console.log(e);
})
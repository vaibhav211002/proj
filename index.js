const express = require('express');
const app = express()
const path = require('path');
const mongoose = require('mongoose');
const product = require('./models/product');
const methodOverride = require('method-override');
const { log } = require('console');

mongoose.connect('mongodb://127.0.0.1:27017/farm').then(()=>{
     console.log('Connection to db online');
})
.catch(err =>{
    console.log('oh no error');
    // console.log(err);
})





app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get('/products',async (req,res)=>{
    const products = await product.find({})
    // console.log(products);
    // res.send('all products are here')
    res.render('products/index',{products})

})


app.get('/products/new',(req,res)=>{
    res.render('products/new')
})

app.post('/products',async (req,res)=>{
    const newprod = new product(req.body)
    await newprod.save()
    res.redirect(`/products/${newprod._id}`)

    
     
})

app.get('/products/:id',async(req,res)=>{
    const {id} = req.params

    const products = await product.findById(id)
    // if (products.id===undefined) {

        
    // }
    // console.log(products.name);
    res.render('products/details',{products})
    // res.send(`${products.name}`)
})


app.get('/products/:id/edit', async (req,res)=>{
    const {id} = req.params
    const products = await product.findById(id)

    res.render('products/edit',{products})
})


app.put('/products/:id',async(req,res)=>{
    const {id} = req.params
    const Product= await product.findByIdAndUpdate(id,req.body,{runValidators:true})
    res.redirect(`/products/${Product.id}`)

})


app.delete('/products/:id',async(req,res)=>{
    const {id}=req.params
    const products = await product.findByIdAndDelete(id)
    // console.log({id});
    res.redirect('/products')
})

app.listen(3000,()=>{
    console.log("on the server");
})
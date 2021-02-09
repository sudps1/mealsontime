const express = require('express');
// const BookData = require('./src/model/Bookdata');
const Userdata = require('./src/model/Userdata');
const Chefdata = require('./src/model/Chefdata');
const Fooddata = require('./src/model/Fooddata');
const Orderdata = require('./src/model/Orderdata');
const Chefresdata = require('./src/model/Chefresdata');

const port = process.env.PORT || 3000;
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
username='admin';
password='12345678';




function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

//   app.post('/room',function(req,res){
  
//     let roomnumber =req.body.uname;

//     Chefresdata.find({roomnumber:roomnumber})
//     .then((chefres)=>{
//       res.send(chefres);
//   });
// })
// app.get('room/:user',  (req, res) => {
  
//   const user = req.params.user;
//   console.log(user);

//   Chefresdata.find({roomnumber:'user'})
//     .then((chefres)=>{
//         res.send(chefres);
//     });
// })




  app.post('/cheflogin',function(req,res){
  
    let email =req.body.uname;
    let password =req.body.password;   

    Chefdata.findOne({email:email})
   .then(function(user){
         if(user.password == password)
         {
          console.log('Valid User!');
          let payload = {subject: username + password};
          let token = jwt.sign(payload,'secretKey');
          res.status(200).send({token});
           }

         else{
            res.status(401).send('Invalid Credentials');
            }
    })
    .catch( ()=> {

            res.status(401).send('User not found! Please SIGN UP!');
  });
})
  
app.post('/patientlogin',function(req,res){
  
  let roomnumber =req.body.uname;
  let password =req.body.password;   

  Userdata.findOne({roomnumber:roomnumber})
 .then(function(user){
       if(user.password == password)
       {
        console.log('Valid User!');
        let payload = {subject: username + password};
        let token = jwt.sign(payload,'secretKey');
        res.status(200).send({token});
         }

       else{
          res.status(401).send('Invalid Credentials');
          }
  })
  .catch( ()=> {

          res.status(401).send('User not found! Please SIGN UP!');
});
})

app.post('/order',function(req,res){
   
  console.log(req.body);
 
  var order = {       
    email : req.body.order.email,
    id : req.body.order.id,
    diabetes : req.body.order.diabetes,
    hypertension : req.body.order.hypertension,
    emergency : req.body.order.emergency,
    quantity : req.body.order.quantity,
    message : req.body.order.message,
    status : req.body.order.status
    


 }       
 var order = new Orderdata(order);
 order.save();
});
  
app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var chef = {       
      fullname : req.body.chef.fullname,
      chefid : req.body.chef.chefid,
      email : req.body.chef.email,
      mobno : req.body.chef.mobno,
      password : req.body.chef.password,
      confirmpassword : req.body.chef.confirmpassword

   }       
   var chef = new Chefdata(chef);
   chef.save();
});





app.post('/servedin',function(req,res){
   
  console.log(req.body);
 
  var chefres = {       
    roomnumber : req.body.chefres.email,
    foodname : req.body.chefres.foodname,
    quantity : req.body.chefres.quantity,
    servedin : req.body.chefres.servedin,
    id : req.body.chefres.id



 } 



//  Orderdata.findByIdAndUpdate({"_id":chefres.id},
//                                   {$set:{
//                                   "status":"true"}})


var order_id = chefres.id; 
console.log(order_id) 

Orderdata.findByIdAndUpdate(order_id, { status: 'true' }, 
                            function (err, docs) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
        console.log("Updated User : ", docs); 
    } 
});
// Orderdata.books.update(
//   { _id: 1 },
//   {
//     $inc: { stock: 5 },
//     $set: {
//       item: "ABC123",
//       "info.publisher": "2222",
//       tags: [ "software" ],
//       "ratings.1": { by: "xyz", rating: 3 }
//     }
//   }
// )


 
//  Chefresdata.find({ roomnumber: roomnumber }, function(err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     res.json(result);
    
//   }
// })

 var chefres = new Chefresdata(chefres);
 chefres.save();
});







app.post('/inputfood',function(req,res){
   
  console.log(req.body);
 
  var food = {       
    foodname : req.body.food.foodname,
    price : req.body.food.price,
    cuisine : req.body.food.cuisine,
    description : req.body.food.description,
    url : req.body.food.url    


 }       
 var food = new Fooddata(food);
 food.save();
});


app.get('/foods',function(req,res){
    
  Fooddata.find()
                .then(function(foods){
                    res.send(foods);
                });
});

app.get('/getorders',function(req,res){
    
  Orderdata.find()
                .then(function(orders){
                    res.send(orders);
                });
});

app.get('/chefs',function(req,res){
    
  Chefdata.find()
                .then(function(chefs){
                    res.send(chefs);
                });
});


app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
  Chefdata.findOne({"_id":id})
    .then((chef)=>{
        res.send(chef);
    });
})
app.get('/room/:id',  (req, res) => {
  
  const roomnumber = req.params.id; 
  
  console.log(roomnumber);
  // Chefresdata.find({'roomnumber':roomnumber})
  //   .then((chefres)=>{
  //       res.send(chefres);
  //   });
  Chefresdata.find({ roomnumber: roomnumber }, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      
    }
  })
})
// app.post('/patientlogin',function(req,res){
  
//   let email =req.body.uname;
//   let password =req.body.password;   

//   Userdata.findOne({email:email})
//  .then(function(user){
//        if(user.password == password)
//        {
//         console.log('Valid User!');
//         let payload = {subject: username + password};
//         let token = jwt.sign(payload,'secretKey');
//         res.status(200).send({token});
//          }

//        else{
//           res.status(401).send('Invalid Credentials');
//           }
//   })
//   .catch( ()=> {

//           res.status(401).send('User not found! Please SIGN UP!');
// });
// })

app.get('/order/:id',  (req, res) => {
  
  const id = req.params.id;
  Orderdata.findOne({"_id":id})
    .then((order)=>{
        res.send(order);
    });
})

app.get('/food/:id',  (req, res) => {
  
  const id = req.params.id;
  Fooddata.findOne({"_id":id})
    .then((food)=>{
        res.send(food);
    });
})

app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (username !== userData.uname) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })
    app.put('/updatefood',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      foodname= req.body.foodname,
      price = req.body.price,
      cuisine = req.body.cuisine,
      description = req.body.description,      
      url = req.body.url

      Fooddata.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "foodname":foodname,
                                  "price":price,
                                  "cuisine":cuisine,
                                  "description":description,                                  
                                  "url":url}})
     .then(function(){
         res.send();
     })
   })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      fullname= req.body.fullname,
      chefid = req.body.chefid,
      email = req.body.email,
      mobno = req.body.mobno,      
      password = req.body.password,
      confirmpassword = req.body.confirmpassword

      Chefdata.findByIdAndUpdate({"_id":id},
                                  {$set:{
                                  "fullname":fullname,
                                  "chefid":chefid,
                                  "email":email,
                                  "mobno":mobno,                                  
                                  "password":password,
                                  "confirmpassword":confirmpassword}})
     .then(function(){
         res.send();
     })
   })


   app.delete('/removefood/:id',(req,res)=>{
   
    id = req.params.id;
    Fooddata.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
  })
   
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     Chefdata.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
  
     
   app.post('/userdetails',function(req,res){
   
    console.log(req.body);
   
    var user = {       
      fullname : req.body.user.firstname,
      roomnumber : req.body.user.username,
      email : req.body.user.email,
      mobno : req.body.user.mobno,
      password : req.body.user.password

   }       
   var user = new Userdata(user);
   user.save();
});

app.listen(port, function(){
    console.log('listening to port 3000');
});


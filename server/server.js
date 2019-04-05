const express = require('express'),
          app = express(),
          bodyParser = require('body-parser'),
          cors = require('cors'),
          MongoClient = require('mongodb').MongoClient,
          url = 'mongodb://admin:dimitur1@ds131296.mlab.com:31296/pizza-testing'
          port = 3001;



var collection = '';

MongoClient.connect(url, function(err, client) {
  // Select the database by name
  const db = client.db('pizza-testing');
  collection = db.collection('users');
});


app.use(cors()) // we need to enable cors 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res) =>{
//     res.sendFile(__dirname + '/../public/index.html');
// })

// app.use(express.static(__dirname + '/../public'))
app.post('/login',(req,res,next)=>{ 
    const {email,password}  = req.body;
    let ret = {error: true, data:''}


    collection.findOne({email})
    .then(doc =>{
        if(!doc) throw new Error('There is no user with this email ')
        else  doc.password === password ? (ret.error = false,  ret.data = 'success' ) : (ret.data = 'passwords didnt match') ;
        res.statusCode = 200; 
        res.send(ret);
    })
    .catch(err => {
        console.log('catch error ' + err)
        ret.data =  err.message || err; 
        
        res.send(ret);
    })
})

app.post('/register',(req,res,next)=>{
    
    saveRegistrant(req,res);
    // you can check the data before asign it in the database 
    // you can create a middleware function which does this 

})


function saveRegistrant(req,res){
    const { email,password,address,city,state,postal} = req.body; 
    let ret = {error:true, data: ''};

    collection.findOne({email})
        .then(doc => {
            if(!doc) return collection.save({email,password,address,city,state,postal});
            else throw new Error('something is wrong : there is an existin user');
        })
        .then(doc => { 
            ret= {error:false , data :'success'}; 
            res.statusCode = 200; 
            res.send(ret);
        })
        .catch(err => {
            ret.data = err;  // its not recommended to send the same server error to the front end 
            res.send(ret);
        })
}





app.listen(port,()=>`server is listening on ${port}`)

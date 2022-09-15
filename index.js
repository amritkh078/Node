const express = require('express');
const routeee = require('./routes/route')
const authroute = require('./routes/route_auth')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/',routeee)
app.use('/',authroute)

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
})
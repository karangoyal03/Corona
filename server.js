const express =require('express')
const app =express()

const server_port =process.env.PORT||5555;


app.set('view engine','hbs')

app.use("/", express.static(__dirname + "/views"));




app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('About')
})
app.get("/history", (req, res) => {
  res.render("History");
})
app.get("/precautions", (req, res) => {
  res.render("Precautions");
})
app.get("/region", (req, res) => {
  res.render("Region");
});



app.listen(server_port,()=>{
    console.log('server has started');
})
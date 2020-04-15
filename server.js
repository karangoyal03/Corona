const express =require('express')
const app =express()


app.set('view engine','hbs')

// app.use(express.static("views"));
app.use("/", express.static(__dirname + "/views"));
// app.use(express.static('views/images'))
// app.use(express.static('views'))



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



app.listen(5555,()=>{
    console.log('server has started');
})
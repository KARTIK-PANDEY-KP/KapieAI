var express = require('express')
var multer  = require('multer')
var upload= multer();
var port = 3000;

var app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.use(express.static(__dirname));
app.use('/uploads', express.static('uploads'));

app.post('/profile-upload-single', upload.single('profile-file'), function (req, res, next) {
    console.log(req)
    // console.log(JSON.stringify(req.file))
    var response = '<a href="/">Home</a><br>'
    response += "Files uploaded successfully.<br>"
    response += `<img src="${req.file.path}" /><br>`
    var name = req.file.path
    var tmep = name.split("\\")
    var temp = tmep[1].split(".")
    var result = parseInt(temp[0])
    if(result<3375){ans = "There is no event"}else if(result<4855){ans = "Fallen Tree"}else if(result<6378){ans = "Fire"}else if(result<7988){ans = "Flooding"}else if(result<9056){ans = "Bad Road"}else if(result<11241){ans = "Traffic Jam"}else if(result<13060){ans = "Garbage"}else if(result <15223){ans = "Traffic Accident"}else{ans = "Class not defined"}

    response += `<h2>${ans}</h2>`
    setTimeout(function(){
      return res.send(response)
    }, 1000)
    // return res.send(response)
})

app.listen(port,() => console.log(`Server running on port ${port}!\nClick http://localhost:3000/`))
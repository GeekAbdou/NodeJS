//Http sev connection
const fs = require("fs");
let http = require("http");
const port = 3001;

/*
//filesytem edit
let fs = require('fs')
//Read from async func
fs.readFile('data.txt',function(err,data){
    if(err){
        return console.error(err)
    }
    console.log('Async read : ' + data.toString());
})

//Read from sync func
fs.readFileSync('data.txt',function(err,data){
    if(err) throw err;
    console.log('sync read : ' + data.toString());
})

//write from async func 
fs.writeFileSync('data.txt','content to write',function(err){
    if(err) throw err;
    console.log('Async write : ');
})

//write from sync func 
fs.writeSync('data.txt','content to write',function(err){
    if(err) throw err;
    console.log('Async write :');
})

//append in exsisting file 
fs.appendFile('data.txt','text appended',function(err){
    if(err) throw err;
    console.log('file saved!');
})

//rename file
fs.unlink('data.txt', 'newdata.txt',function(err){
    if(err) throw err;
    console.log('file renamed!');
})


//delete file
fs.unlink('data.txt',function(err){
    if(err) throw err;
    console.log('file deleted!');
})
*/
//==============================================
/*
//URL parsin
let url = require('url');
let adrs = 'https://google.com';
let urlPrs = url.parse(adrs,true);
console.log(urlPrs);

//Events - EventEmitter
let event = require('events');
let MyeventEmitter = new event.EventEmitter();
//example .on
MyeventEmitter.on('upload', function(){
    console.log('uploading file');
})
//example .Emit
MyeventEmitter.emit('upload!')
//Events Example 
fs.readFile('data.txt',function(err,data){
    MyeventEmitter.emit('open');
    if(err) throw err;
    console.log(data.toString());
    MyeventEmitter.emit('close');
});
//Now creating the emits 
MyeventEmitter.on('open',function(){
    console.log("file opened");
})
MyeventEmitter.on('close',function(){
    console.log("file closed");
})
*/
//=========================================
/*
//Global Objects
console.log('__filename'); //for file direction 
setInterval(function(){
    console.log("delay by 2000ms")
},2000);
//other global 
//console
//process
//buffer
//setInterval
//setImmediate
//setTimeout
//clear setInterval
//clear setImmediate
//clear setTimeout

*/

/*
//os module
const os = require('os');
let CPU = os.cpus();
let platform 
console.log(CPU);
//many other easy examples
*/

//Stream and buffer
let readStream = fs.createReadStream("./data.txt");
let writeStream = fs.createWriteStream("./newFile.txt");

readStream.on("data", (chunk)=> {
  console.log("new chunk");
  writeStream.write(chunk);
});

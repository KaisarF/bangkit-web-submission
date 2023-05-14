/*
const express = require('express');
const port = 6969;
const path = require('path');
const app = express();
const fs= require('fs');
const http = require('http');



app.use(express.static(__dirname + '/public'));
app.use('/',function(req,res){
    res.sendFile( path.join(__dirname , 'index.html'))

});
/*
const server=http.createServer(function(req, res) {
    res.writeHead (200, {'content-type': 'text/html'});
    fs.readFile ('index.html', function(err, data) {
        if (err) {
            res.writeHead (404)
            res.write('error: file not found')
        }else{
            res.write(data)
        }
        res.end()
    })
    
    
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static("express"));


app.use(express.static(__dirname+'/public/style'));
// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
  });

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 6969;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(content);
        res.end();
      }
    });
  } else if (req.url === '/assets/styles/style.css') {
    const cssPath = path.join(__dirname, 'assets', 'styles', 'style.css');
    fs.readFile(cssPath, (error, content) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(content);
        res.end();
      }
    });
  } else if (req.url === '/assets/styles/responsive.css') {
    const cssPath = path.join(__dirname, 'assets', 'styles', 'responsive.css');
    fs.readFile(cssPath, (error, content) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Internal Server Error');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(content);
        res.end();
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
*/
const express = require('express');
const path = require('path');

const app = express();
const port = 6969;

// Menyajikan file statis dari folder 'assets'
app.use(express.static(path.join(__dirname, 'assets')));

// Menyajikan file 'home.html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
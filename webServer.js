const http = require('http')
const fs = require('fs')
const dayjs = require('dayjs')

console.log(dayjs().year())

const server = http.createServer((req, res)=>{
    // console.log('GET!!!!')
    let path = './page/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }


    res.setHeader('Content-Type', 'text/html')
    // res.write('<meta charset=UTF-8>')
    // res.write('<h1>hello你好</h1>')
    fs.readFile(path, (error, data)=>{
        if(error)
            console.log(error)
        else
            res.write(data)

        res.end()
    })

    
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening PORT 3000')
})
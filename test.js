const fs = require('fs')

fs.writeFileSync('./demo.txt', 'hello', ()=>{
    console.log('finish');
})

fs.readFile('demo.txt', (error, data)=>{
    if(error)
        console.log(error)
    else
        console.log(data.toString())
})
const express = require('express')
const dayjs = require('dayjs')

const app = express()

// 要放在最上面統計
app.use((req,res, next)=>{
    console.log(`new guest: ${req.hostname} | request page ${req.path}`)
    next()
})

// 資料夾public內為訪客可以讀的
// 用來放公開文件
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', 'page')

app.get('/', (req, res)=>{
    let article = [
        {title: '123', author : 'wayne'},
        {title: 'abc', author : 'John'},
        {title: 'qwe', author : 'David'}
    ]
    let now = `現在時間:${dayjs().hour()}時${dayjs().minute()}分`
    res.render('index', {
        courseName : 'nodejs class',
        time : now,
        blogs : article,
        title : '首頁'})
})

app.post('/',(req,res)=>{
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.password)
})

app.get('/about', (req, res)=>{
    res.render('about', {title : '關於'})
})

// redirect
// app.get('/aboutus', (req, res)=>{
//     res.redirect('/about')
// })

app.use((req,res)=>{
    res.status(404).render('404', {title : 'Not Found'})
})

app.listen(3000)
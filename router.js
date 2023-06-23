const cors = require('cors')
//获取express模块
const express = require('express')

// 生成路由
const p = express()
p.use(cors())

//配置路由
p.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('get请求成功了')
})

p.post('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send('post请求成功了')
})

// 监听路由
p.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})
const queryString = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req, res) => {
  // 设置返回格式JSON
  res.setHeader('Content-type', 'application/json')

  // 获取path
  const url = req.url
  req.path = url.split('?')[0]

  // 解析query
  req.query = queryString.parse(url.split('?')[1])

  // 处理blog路由
  const blogData = handleBlogRouter(req, res)
  if( blogData ){
    return res.end(
      JSON.stringify(blogData)
    )
  }

  // 处理user路由
  const userData = handleUserRouter(req, res)
  console.log(userData)
  if(userData) {
    return res.end(
      JSON.stringify(userData)
    )
  }
  // 未命中返回404
  res.writeHead(404, {"Content-type": 'text/plain'})
  res.write('404 Not Found\n')
  res.end()
   
}

module.exports = serverHandle
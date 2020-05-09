const {getList} = require('../controller/blog')
const {SuccessModel, ErrorModel} = require('../model/resModle')

const handleBlogRouter = (req, res) => {
  const method = req.method

  //获取博客列表
  if(method === 'GET' && req.path === '/api/blog/list'){
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    const listData = getList(author, keyword)
    return new SuccessModel(listData)
  }
  
  // 获取播客详情
  if(method === 'GET' && req.path === '/api/blog/detail'){
    return {
      msg: '这是获取播客详情的接口'
    }
  }

  // 新建一篇博客
  if( method === 'POST' && req.path === '/api/blog/new'){
    return {
      msg: '这是新建播客的接口'
    }
  }

  // 更新一篇播客
  if( method === 'POST' && req.path === '/api/blog/update'){
    return {
      msg: '这是更新播客的接口'
    }
  }

  // 删除一篇播客
  if( method === 'POST' && req.path === '/api/blog/delete'){
    return {
      msg: '这是删除播客的接口'
    }
  }

}

module.exports = handleBlogRouter
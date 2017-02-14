import http from 'http'

import auth from './auth'


const userInfo = {
  name: 'tim',
  pass: '111'
}

const server = http.createServer((req, res) => {

  try {

    const user = auth(req)

    // 收到的basic auth信息的头部是 authorization

    if(user && user.name == userInfo.name && user.pass == userInfo.pass) {

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("secret");

    } else {

      res.statusCode = 401;
      res.setHeader("Content-Type", "text/plain");
      // status:401, 设置 WWW-Authenticate 返回头部，就会弹用户名/密码窗
      res.setHeader("WWW-Authenticate", "Basic");
      res.end("we do not know you.");

    }



  } catch (e) {

    throw e

  }


})


if(!module.parent) {
  server.listen(3000, () => console.log('server running at port 3000'))
}

export default server

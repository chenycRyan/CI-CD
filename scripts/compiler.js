/* eslint-disable prettier/prettier */
const config = require('../deployment.server.json')
const jsonCompiler = (env) => {
  let params = null
  let module = null
  let app = null
  if (env.indexOf('.') > 0) {
    let temp = env.split('.')
    module = temp[0]
    app = temp[1]
    let moduleParams = config[module]
    let appParams = moduleParams.apps[app]
    let appDir = appParams.dir
    delete moduleParams.apps
    moduleParams.dir = appDir
    params = moduleParams
  } else {
    params = config[env]
  }
  const dir = params.dir
  const dirParse = dir.replace(/\//g, '\\')
  let compileParams = null

  if (module != null) {
    switch (module) {
      case 'crmServer':
        compileParams = Object.assign({}, params, {
          host: '192.168.0.10',
          port: '22',
          username: 'hbmes',
          password: '123456',
          targetDir: '/nginx/webdir/' + dir,
          mvFrom: 'D:\\jar\\home\\nginx\\webdir\\' + dirParse,
          mvTo: 'D:\\nginxServer\\nginx-1.20.2\\html\\' + dirParse,
          targetBaseDir: 'D:\\nginxServer\\nginx-1.20.2\\html\\',
          module: module,
          app: app,
          type: 'windows'
        })
        break
      case 'devServer':
        compileParams = Object.assign({}, params, {
          host: '192.168.3.10',
          port: '22',
          username: 'java-user',
          password: 'hbxylixiao8456',
          targetDir: '/usr/local/hb-apps/' + dir,
          mvFrom: '/usr/local/hb-apps/' + dir,
          mvTo: '/usr/local/hb-apps/' + dir,
          targetBaseDir: '/usr/local/hb-apps/',
          module: module,
          app: app,
          type: 'linux'
        })
        break
    }
  } else {
    //  服务器个性配置
    //  手动配置服务器认证信息 暂不使用
    //  "customer":{
    //   "host":"192.168.0.10",
    //   "port":"22",
    //   "username":"hbmes",
    //   "password":"123456",
    //   "dir":"crmBak/mesCustomer"
    // }
    switch (params.host) {
      case '192.168.0.10':
        compileParams = Object.assign({}, params, {
          targetDir: '/nginx/webdir/' + dir,
          mvFrom: 'D:\\jar\\home\\nginx\\webdir\\' + dirParse,
          mvTo: 'D:\\nginxServer\\nginx-1.20.2\\html\\' + dirParse,
          module: module,
          app: app,
        })
        break
    }
  }

  return compileParams
}

module.exports = jsonCompiler

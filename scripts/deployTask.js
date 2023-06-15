/* eslint-disable prettier/prettier */
const path = require('path')
const Client = require('ssh2-sftp-client')
const fs = require('fs')
const { NodeSSH } = require('node-ssh')
const jsonCompiler = require('./compiler')

// 客户端初始化
const client = new Client()
const ssh = new NodeSSH()

// 传输相关配置
const argv = process.argv
const env = argv[argv.length - 1]
const envConfig = jsonCompiler(env)
const { host, port, username, password, app, type, targetBaseDir } = envConfig
const distDir = '/var/jenkins_home/workspace/' + app + '/dist'
const srcDir = path.join(__dirname, '../dists/' + app)
const targetDir = envConfig.targetDir

// 文件初始化
if (!fs.existsSync(distDir)) {
  console.log('项目打包目录不存在, 路径' + distDir)
  process.exit(0)
}

if (fs.existsSync(srcDir)) {
  fs.rmSync(srcDir, {
    recursive: true,
  })
}

fs.rename(distDir, srcDir, (err) => {
  if (err) {
    throw err
    process.exit(0)
  }
  console.log('打包文件已就绪, 连接服务器...')
  if (type == 'windows') {
    upDir()
  } else {
    sshUpload()
  }
})

// 服务器连接初始化
const authConfig = {
  host,
  port,
  username,
  password,
}

// 服务器文件移动
const mvDir = () => {
  ssh
    .connect(authConfig)
    .then(() => {
      let moveToDir = envConfig.mvTo.substr(0, envConfig.mvTo.lastIndexOf('\\'))
      let moveCmd = 'move ' + envConfig.mvFrom + ' ' + envConfig.mvTo
      let bakCmd = 'move /y ' + envConfig.mvTo + ' ' + envConfig.mvTo + '_bak'
      let bakRmCmd = 'rd /s/q ' + envConfig.mvTo + '_bak'
      let cmd = 'cmd /c ' +
      'if not exist ' + moveToDir + ' (md ' + moveToDir + ' && ' + moveCmd + ')' +
      ' else ( if exist ' + envConfig.mvTo +
      ' (if exist ' + envConfig.mvTo + '_bak ( ' + bakRmCmd + ' && ' + bakCmd + ' && ' + moveCmd + ')' +
      ' else (' + bakCmd + ' && ' + moveCmd + '))' +
      ' else ( ' + moveCmd + '))'
      ssh.execCommand(cmd).then((result) => {
        if (!result.stderr) {
          console.log('部署成功!')
          process.exit(0)
        } else {
          console.log('移动过程发生错误:', result)
          process.exit(0)
        }
      })
    })
    .catch((err) => {
      console.log('连接服务器失败:', err)
      process.exit(0)
    })
}

const sshUpload = () => {
  console.log('SSH Upload Start From:' + srcDir + ' To:' + targetDir)
  ssh.connect(authConfig).then(() => {
    let bakDir = targetBaseDir + 'projects_bak'
    let dirName = targetDir.split('/').pop()
    let bakFile = bakDir + '/' + dirName
    let cmd = 'test -e ' + bakDir + ' || mkdir ' + bakDir
    // 删除备份, 重新备份
    cmd += ';test -e ' + bakFile + ' && rm -rf ' + bakFile
    cmd += ';test -e ' + targetDir + ' && mv ' + targetDir + ' ' + bakDir + '/'
    ssh.execCommand(cmd).then(result => {
      if (!result.stderr) {
        ssh.putDirectory(srcDir, targetDir, {
          recursive: true,
          concurrency: 10
        }).then(function(status) {
          console.log('项目发布' + (status ? '成功' : '失败'))
          process.exit(0)
        }).catch((err) => {
          console.log('上传服务器失败:', err);
          process.exit(0);
        })
      } else {
        console.log('移动过程发生错误:', result);
        process.exit(0);
      }
    });
  }).catch((err) => {
    console.log('连接服务器失败:', err);
    process.exit(0);
  });
}

// 上传文件至服务器
const upDir = () => {
  console.log('SSH Upload Start From:' + srcDir + ' To:' + targetDir)
  client
    .connect(authConfig)
    .then(() => {
      console.log('连接成功 开始上传...')
      return client
        .uploadDir(srcDir, targetDir, /^((?!apiConfig\.js).)+$/)
        .then((res) => {
          console.log('上传成功, 开始移动位置...')
          mvDir()
        })
    })
    .catch((err) => {
      console.log('连接服务器失败', err)
    })
}

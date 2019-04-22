module.exports = {
  apps: [{
    name: 'storage',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-191-231-230.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/jim1-storagekey.pem',
      ref: 'origin/master',
      repo: 'git@github.com:zyi103/storage.git',
      path: '/home/ubuntu/storage',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
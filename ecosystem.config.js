module.exports = {
  apps: [
    {
      name: 'gateway',
      script: './gateway/index.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'service1',
      script: './services/service1/index.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    },
    {
      name: 'service2',
      script: './services/service2/index.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: 3002
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3002
      }
    }
  ]
};
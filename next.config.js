/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
       FILE_UPLOAD_API: 'https://ytn9ztt26i.execute-api.us-west-2.amazonaws.com/dev/upload',
       INSTANCE_API: 'http://44.231.134.141:5000/'
    },
    transpilePackages: ['@mui/x-charts'],
}

module.exports = nextConfig

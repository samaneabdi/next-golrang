/** @type {import('next').NextConfig} */
// const nextConfig = {}
const withNextIntl = require('next-intl/plugin')( );
module.exports =withNextIntl({
    async redirects() {
        return [
          {
            source: '/',
            destination: '/infraction',
            permanent: true,
          },
        ]
      },
})


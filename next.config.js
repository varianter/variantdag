const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  async rewrites() {
    return [
      {
        source: '/:city/:variantday.ics',
        destination: '/api/:city/:variantday',
      },
    ];
  },
});

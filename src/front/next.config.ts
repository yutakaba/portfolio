import withLinaria from 'next-with-linaria';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withLinaria(config);

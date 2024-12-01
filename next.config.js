// /** @type {import('next').NextConfig} */

// const nextConfig = {
//     reactStrictMode: true,
//     webpack5: true,
//     webpack: config => {
//         config.resolve.fallback = { fs: false };
 
//         return config;
//     },
//     images: {
//         domains: ['cdn.piece.run'], // 여기에 사용하는 이미지 호스트를 추가
//     },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    //도커 이미지 빌드시 이미지 경로를 못찾아서 추가
    disableStaticImages: true,
    output: 'standalone',
    webpack5: true,
    webpack: config => {
        config.resolve.fallback = { fs: false };
        config.module.rules.push({
            test: /\.(mp4|mov|avi)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/video', 
                    outputPath: 'static/video', // 파일이 저장될 경로
                    name: '[name].[ext]',
                },
            },
        });

        return config;
    },
    images: {
        domains: ['cdn.piece.run', '*'], // 여기에 사용하는 이미지 호스트를 추가
    },
};

module.exports = nextConfig;

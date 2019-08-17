module.exports = {
    entryPoints: {
        // index is default and you can add many more entry points here
        index: './src/index.js',
    },
    htmlTemplate: './src/index.html',
    distDir: './dist', // Distribution directory
    host: 'localhost',
    serverPort: 9000, // Local Webpack Dev Server port (main port)
    browserSyncPort: 3030 // BrowserSync port (Using cross browser testing)
};
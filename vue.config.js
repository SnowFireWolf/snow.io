
module.exports = {
    publicPath: '/',
    productionSourceMap: false,
    pwa: {
        name: 'SnowFireWolf',
        themeColor: '#4DBA87',
        manifestOptions: {
            background_color: '#4DBA87',
        },
        msTileColor: '#4DBA87',
        assetsVersion: '0.0001',
    },
    css: {
        // 是否使用css分離外掛 ExtractTextPlugin
        extract: true,
        // 開啟 CSS source maps?
        sourceMap: false,
        // css預設器配置項
        loaderOptions: {},
        // 啟用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    }
}

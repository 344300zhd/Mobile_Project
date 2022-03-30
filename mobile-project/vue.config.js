module.exports = {
    css : {
        loaderOptions : {
            postcss : {
                plugins: [
                    // 兼容浏览器
                    require("autoprefixer")({
                        overrideBrowserslist : [
                            "Android 4.1",
                            "iOS 7.1",
                            "Chrome > 31",
                            "ff > 31",
                            "ie >= 8",
                        ],
                        grid : true,
                    }),
                    require("postcss-pxtorem")({
                        rootValue : 75,
                        exclude : /(node_module)/,
                        propList : ["*"],
                        replace : true,
                        mediaQuery : false,
                        minPixelValue : 0
                    })
                ]
            }
        }
    }
}
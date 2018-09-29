module.exports = function (api) {
    api.cache.never();
    
    const presets = [
        ["@babel/preset-env", {
            "targets": {
                "node": "10",
                "browsers": [ // new config
                    "last 2 major versions", 
                    "ie >= 7"
                ]
            },
            // "shippedProposals": true // new config
            }
        ],
        "@babel/preset-react"
    ];
    const plugins = [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        // "@babel/plugin-syntax-object-rest-spread" // new plugin
    ];

    return {
        presets,
        plugins
    };
}

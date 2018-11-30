const PROXY_CONFIG = {
    "/spaces": {
        "target": "https://cdn.contentful.com",
        "secure": true,
        "changeOrigin": true,
        "logLevel": "debug",
        "headers": {
            "Authorization": "Bearer 2bb79c08ab759c14a67bbe4cd309d9e36fde3d2d8da7535c95d038d5a725021b"
        }
    }
};

module.exports = PROXY_CONFIG;
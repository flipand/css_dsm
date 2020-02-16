const path = require("path");

module.exports = {
    stories: ["../stories/**/*.stories.js"],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            include: path.resolve(__dirname, "../styles"),
        });
        config.module.rules.push({
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            include: path.resolve(__dirname, "../styles"),
        });

        return config;
    },
};

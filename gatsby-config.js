module.exports = {
    siteMetadata: {
        title: "GW2 Fractal Bingo",
        description: "Simple game of bingo for Guild Wars 2 Fractal runs",
        author: "Zerthox"
    },
    pathPrefix: "/gw2-bingo",
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-offline",
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true,
                allExtensions: true
            }
        },
        {
            resolve: "gatsby-plugin-sass",
            options: {
                sassOptions: {
                    includePaths: [`${__dirname}/src/styles`]
                }
            }
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                test: /\.jsx?$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ["develop"],
                options: {
                    emitWarning: true,
                    failOnError: false
                }
            }
        }
    ]
};

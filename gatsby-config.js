module.exports = {
    siteMetadata: {
        title: "GW2 Fractal Bingo",
        description: "Simple game of bingo for Guild Wars 2 Fractal runs",
        author: "Zerthox"
    },
    pathPrefix: "/gw2-bingo",
    plugins: [
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/data`
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "GW2 Fractal Bingo",
                icon: `${__dirname}/src/assets/encryption.png`
            }
        },
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
            resolve: "gatsby-plugin-dts-css-modules",
            options: {
                dropEmptyFile: true
            }
        },
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                stages: ["develop"],
                extensions: ["js", "jsx", "ts", "tsx"],
                exclude: ["node_modules", ".cache", "public"],
                emitWarning: true,
                failOnError: false
            }
        }
    ]
};

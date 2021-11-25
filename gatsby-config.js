const path = require("path");

const gatsbyRequiredRules = path.join(
    process.cwd(),
    "node_modules",
    "gatsby",
    "dist",
    "utils",
    "eslint-rules"
);

module.exports = {
    siteMetadata: {
        title: "GW2 Fractal Bingo",
        description: "Simple game of bingo for Guild Wars 2 Fractal runs",
        author: "Zerthox"
    },
    pathPrefix: "/gw2-bingo",
    plugins: [
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "GW2 Fractal Bingo",
                icon: "src/assets/encryption.png"
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
            resolve: "gatsby-plugin-eslint",
            options: {
                rulePaths: [gatsbyRequiredRules],
                stages: ["develop"],
                extensions: ["js", "jsx", "ts", "tsx"],
                exclude: ["node_modules", ".cache", "public"]
            }
        }
    ]
};

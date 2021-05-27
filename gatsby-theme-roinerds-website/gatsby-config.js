module.exports = {
    plugins: [
        "gatsby-transformer-remark",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-remove-serviceworker",
        "gatsby-transformer-json",
        "gatsby-plugin-sharp",
        "gatsby-plugin-ramda",
        "gatsby-plugin-postcss",
        {
            resolve: `gatsby-transformer-sharp`,
            options: {
                // The option defaults to true
                // checkSupportedExtensions: false,
            },
        },
    ],
};

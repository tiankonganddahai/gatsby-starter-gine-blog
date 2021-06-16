module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/9a094772c457462ba5cf957a9d5afa61?v=2f3ce862af78447c9be55ede40fa2975"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/f24929858c4d45d893ff44aad02381e8?v=d3f5334c3aa0470d8ce53f1e52c13a2e"
            }
        }
    ],
}

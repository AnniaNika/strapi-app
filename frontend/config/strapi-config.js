const strapiOptions = {
    apiURL: "http://127.0.0.1:1337",
    accessToken: "d8b8998e501e509c7b05df9a6e21c24351e676af35ba1a371d70b39124414d9a490b20c29dee2425cad98cbcfb139e23716a2633dcf2f127f5aa56608206d3b31ffeaf3cb3de10a2026baea0b1598b4191240d2f7c357b9648aa3de3542d440767f3800aeae5578be64a547b017696b532f3d769434bf8d48bd47629b7ade8bf",
    collectionTypes: [
        {
            singularName: "event",
            pluginOptions: {
                i18n: {
                    locale: "all",
                },
            },
            queryParams: {
                populate: "*",
            },
        },
        {
            singularName: "event",
            pluginOptions: {
                i18n: {
                    locale: "all",
                },
            },
            queryParams: {
                populate: "*",
            },
        },
    ],
    singleTypes: [
        {
            singularName: "setting",
            pluginOptions: {
                i18n: {
                    locale: "all",
                },
            },
            queryParams: {
                populate: {
                    main: {
                        populate: "*",
                    },
                },
            },
        },
    ],
}

module.exports = {
    strapiOptions,
}
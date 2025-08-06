module.exports = {
    networks:{
        gftestnet: {
            node_url: 'https://dev-history.globalforce.io',
            chain: 'gftestnet',
            accounts: [
                {
                    name: 'youraccount',
                    // permission: 'owner', // defaults to active
                    private_key: process.env.PRIVATE_KEY
                }
            ]
        },
        gf: {
            node_url: 'https://history.globalforce.io',
            chain: 'gf',
            accounts: [
                {
                    name: 'youraccount',
                    // permission: 'owner', // defaults to active
                    private_key: process.env.PRIVATE_KEY
                }
            ]
        }
    },
}

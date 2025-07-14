// status can be "online", "idle", "dnd", or "invisible" or "offline"

export default [

    {

        channelId: "1375829437270200427",

        serverId: "1375829435684753543",

        token: process.env.token1,

        selfDeaf: false,

        autoReconnect: {

            enabled: true,

            delay: 5, // ثواني

            maxRetries: 5,

        },

        presence: {

            status: "idle",

        },

        selfMute: true,

    },

];

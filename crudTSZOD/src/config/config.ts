import 'dotenv/config'

export const config={
    mongo:{
        url:process.env.MONGO_URL || "mongodb://127.0.0.1:27017/crudTS1"
    },
    server:{
        port:process.env.SERVER_PORT || 1221
    }
}
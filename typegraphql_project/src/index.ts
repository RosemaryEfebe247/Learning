// An application that performs basic CRUD operations (Create, Read, Update, Delete)
import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata"
import express from "express"
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import cookieParser from "cookie-parser"
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageProductionDefault 
} from "apollo-server-core";
import { resolvers } from "./resolvers";
import { connectToMongo } from "./utils/mongo";

async function bootstrap() {
    // Build the schema
    const schema = await buildSchema({
        resolvers,
       // authchecker
    })

    // Initialize express
    const app = express()

    app.use(cookieParser())

    // Create the apollo server
    const server = new ApolloServer({
        schema,
        context: (ctx) =>{
          //  console.log(ctx)
    return ctx
        },
        plugins: [
            process.env.NODE_ENV === 'production' ?
            ApolloServerPluginLandingPageProductionDefault() :
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]
    })

    await server.start()

    //apply middleware to the server
    server.applyMiddleware({app})

// call app.listen on express server
app.listen({port: 4000 }, () => {
    console.log("App is listening on http://localhost:400")
})

// connect to the database
connectToMongo()
}

bootstrap();
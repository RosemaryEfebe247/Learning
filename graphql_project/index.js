import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//import typedefs
import { typeDefs } from './schema.js';

//import database
import db from './_db.js'

const resolvers = {
    Query: {
        games() {
            return db.game
        },

        reviews() {
            return db.review
        },

        authors() {
            return db.author
        },
        
        userReview(_, args) {
            console.log(args)
            return db.review.find((value) => value.id === args.id)
        },

        userGame(_, args) {
            return db.game.find((value) => value.id === args.id)
        },

        userAuthor(_, args) {
            return db.author.find((value) => value.id === args.id)
        }
    },
    //use the structure as defined in the typdef eg Game.review_folder
    Game: {
        review_folder(parent) {
            console.log(db.review.filter((value) => value.game_id === parent.id))
            return db.review.filter((value) => value.game_id === parent.id)
        }
    },
    Author: {
        review(parent) {
            console.log(parent)
            return db.review.find((value) => value.author_id === parent.id)
        }
    },

    Mutation: {
        deleteGame(_, args) {
            db.game = db.game.filter((d) => d.id !== args.id)
            return db.game
        },
        addGame(_, args) {
            let addvalue = {
                ...args.inputvalue,
                id: Math.floor(Math.random() * 100000).toString()
            }
            db.game.push(addvalue)
            return addvalue
        },

        updateGame(_, args) {
            db.game = db.game.map((value) => {
                if (value.id === args.id) {
                    return {...value, ...args.edits}
                }
                return value
            })
            return db.game.find((value) => value.id === args.id)
        }
    }
}

//server set up
const server = new ApolloServer ({
    //typedefs
    typeDefs,
    //resolvers
    resolvers
})

const url = startStandaloneServer(server, {
    listen: { port: 5000}
})

console.log("server ready on port", 5000)
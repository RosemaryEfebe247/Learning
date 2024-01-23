export const typeDefs = ` #graphql 
    type Game {
        id: ID!,
        title: String!,
        platform: [String!]!,
        review_folder: [Review!]!
    }

    type Review {
        id: ID,
        rating: Int!,
        content: String!,
        game: Game!,
        author: Author
    }

    type Author {
        id: ID!,
        title: String!,
        verified: Boolean!,
        review: [Review]
    }

    type Query {
        games: [Game]
        userGame(id: ID!): Game
        reviews: [Review]
        userReview(id: ID!): Review
        authors: [Author]
        userAuthor(id: ID!): Author
    }

    type Mutation{
        deleteGame(id: ID!): [Game]
        addGame(inputvalue: addgameinput!): Game
        updateGame(id: ID!, edits: editinput!): Game
    }

    input addgameinput {
        title: String!,
        platform: [String!]!
    }

    input editinput {
        title: String,
        platform: [String!]
    }
    `

    
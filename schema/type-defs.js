const {gql} = require("apollo-server");
const typeDefs = gql`

  type User {
    id:ID,
    name:String,
    username:String,
    age:Int,
    nationality:Nationality!
    friends:[User],
    favouriteMovies:[Movie]!
  }
   type Query{
      users:[User]!,
      user(id:ID):User,
      movies:[Movie]!,
      movie(id:ID):Movie
   }

   type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = BRAZIL
  }

  input updateUserNameInput {
    id: ID!
    newUsername: String!
  }

   type Mutation {
    createUser(input: CreateUserInput!): User,
    updateUserName(input:updateUserNameInput!):User,
    deleteUser(id: ID!):User
   }
   enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    UKRAINE
  }
`

module.exports ={typeDefs}
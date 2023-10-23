
const {UserList, MovieList} = require("../fakedata")

const resolvers = {
    Query: {
        // USER RESOLVERS
        users: () => {
          return UserList
        },
        user:(_,args) => {
          const argId = args.id
           return UserList.find(user => user.id === Number(argId))
        },
        movies:() => {
            return MovieList
        },
        movie:(_,args) => {
          return MovieList.find(movie => movie.id === Number(args.id))
        }
    },
    User: {
        favouriteMovies :() => {
            return MovieList.filter(movie => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010 )
        }
    }
}

module.exports = {resolvers}
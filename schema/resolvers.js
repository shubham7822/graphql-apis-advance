
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
    },
    Mutation: {
      createUser:(_,args) => {
       const user = args.input
       const lastId = UserList[UserList.length -1].id
       user.id = lastId + 1
       UserList.push(user)
       return user
      },
      updateUserName:(_,args) => {
        const { id, newUsername } = args.input;
        let userUpdated;
        UserList.forEach((user) => {
          if (user.id === Number(id)) {
            user.username = newUsername;
            userUpdated = user;
          }
        });
  
        return userUpdated;
      },
      deleteUser:(_,args) => {
         return UserList.filter(user  => user.id !== Number(args.id))
      }
    }
}

module.exports = {resolvers}
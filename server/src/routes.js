const UserController = require('./controllers/UserController')
const ComputerController = require('./controllers/ComputerController')

module.exports = (app) => {
    /* RESFUL Api dor users management */

    // get all user
    app.get('/users', UserController.index)

    // create user
    app.post('/user', UserController.create)

    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)

    // delete user
    app.delete('/user/:userId', UserController.remove)

    // get user by id
    app.get('/user/:userId', UserController.show)

    // get all computer
    app.get('/computers', ComputerController.index)

    // create computer
    app.post('/computer', ComputerController.create)

    // edit computer, suspend, active
    app.put('/computer/:computerId', ComputerController.put)

    // delete computer
    app.delete('/computer/:computerId', ComputerController.remove)

    // get computer by id
    app.get('/computer/:computerId', ComputerController.show)
}
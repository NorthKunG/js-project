const ComputerController = require('./controllers/ComputerController')

module.exports = (app) => {
    /* RESFUL Api dor users management */
    // get all computer
    app.get('/computers', ComputerController.index)

    // create computer
    app.post('/computer', ComputerController.create)

    // edit computer, suspend, active
    app.put('/computer/:computerId', ComputerController.put)

    // delete computer
    app.delete('/computer/:computerId', ComputerController.remove)

    // get computer by id
    app.get('/computer/:computerId', ComputerController.show)}
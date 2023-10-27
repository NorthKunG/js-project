module.exports = (sequelize, DataTypes) => {
    const Computer = sequelize.define('Computer', {
        product: DataTypes.STRING,
        brand: DataTypes.STRING,
        processor: DataTypes.STRING,
        display: DataTypes.STRING,
        memory: DataTypes.STRING,
        storage: DataTypes.STRING,
        graphics: DataTypes.STRING,
        operation: DataTypes.STRING,
        camera: DataTypes.STRING,
        wireless: DataTypes.STRING,
        color: DataTypes.STRING,
        weight: DataTypes.STRING,
        price: DataTypes.INTEGER
    })

    return Computer
}
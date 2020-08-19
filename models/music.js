export default (sequelize, DataTypes) => {
    return sequelize.define('music', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        elbum: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        track: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        path: {
            type: DataTypes.TEXT
        },
    },{
        timestamps: true,
    })
}
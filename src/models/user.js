export default (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        login_id: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        login_password: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },

    },{
        timestamps: true,
    })

}
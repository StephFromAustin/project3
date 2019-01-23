module.exports = function (sequelize, Sequelize) {
    var user = sequelize.define("user", {
        user_name: {
            type: Sequelize.STRING, 
            validate: {
                isAlphanumeric: true, 
            }
        }, 

        user_email: {
            type: Sequelize.STRING, 
            validate: {
                isAlphanumeric: true, 
            }
        },

        user_phone: {
            type: Sequelize.INTEGER,
            validate: {
                isAlphanumeric: true,
            }
        },
    });
    
    return user;
}
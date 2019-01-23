module.exports = function (sequelize, Sequelize) {
    var guest = sequelize.define("guest", {
        guest_name: {
            type: Sequelize.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },

        phone_number: {
            type: Sequelize.INTEGER,
            validate: {
                isAlphanumeric: true,
            }
        },
        
    });
    return guest;
};
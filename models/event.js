module.exports = function (sequelize, Sequelize) {
    var event = sequelize.define("main_event", {
        event_name: {
            type: Sequelize.STRING, 
            validate: {
                isAlphanumeric: true,
            }
        },
        
        event_date: {
            type: Sequelize.INTEGER, 
            validate: {
                toDate: true,
            }
        },

        event_time: {
            type: Sequelize.INTEGER,
            validate: {
                isAlphanumeric: true,
            }
        },
    });
    
    return event;
};
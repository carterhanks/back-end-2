const houses = require('./db.json');

let id = 4

module.exports = {
    getHouses: function(req, res) {
        res.status(200).send(houses)
    },
    deleteHouse: function(req, res) {
        let tgtIndex = houses.findIndex(function(houseObj) {
            return houseObj.id === +req.params.houseId;
        });

        houses.splice(tgtIndex, 1);
        res.status(200).send(houses);
    },
    createHouse: function(req, res) {
        const { address, price, imageURL} = req.body;

        const newHouse = {
            id, address, price, imageURL
        }

        houses.push(newHouse);
        id++;
        res.status(200).send(houses);
    },
    updateHouse: function(req, res) {
        let existingHouse = req.params.id;
        let newHouse = req.body.type;
        let tgtIndex = houses.findIndex(function(houseObj) {
            if (houses[i].price <= 10000 && type === 'minus') {
                res.status(200).send(houses);
            } else if (type === 'plus') {
                houses[i].price += 10000;
                res.status(200).send(houses);
            } else if (type === 'minus') {
                houses[i].price -= 10000;
                res.status(200).send(houses);
            } else {
                res.status(400).send('failed to update')
            }
        });
        }
    };


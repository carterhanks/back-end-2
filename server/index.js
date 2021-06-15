const express = require('express');
const app = express();
const cors = require('cors');
const houses = require('./controller');
const ctrl = require('./controller');

const { getHouses, createHouse, updateHouse, deleteHouse} = ctrl;

app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:houseId', updateHouse);
app.delete('/api/houses/:houseId', deleteHouse);


const server_port = 4004;
app.listen(server_port, function() {
    console.log(`Server Sredding on ${server_port}`)
});

// let existingHouse = req.params.houseId;
// let newHouse = req.body.houseId;
// for (let i = 0; i < houses.length; i++); {
//     if (houses[i].houseId === existingHouse) {
//         houses[i].houseId = newHouse;
//         res.status(200).send('House Updated Successfully!');
//         return
//     }
// }
// res.status(400).send("House not Found.")
require('dotenv').config();
const bodyParser = require('body-parser');

(exports.handler = async (event, context) => {
    const express = require('express');
    const app = express();

    app.use(express.json());
    app.use(bodyParser.text({ type: 'application/xml' }));

    app.post('/', async(req, res) => {
        try {
            console.log('*'.repeat(50));
            console.log(req.body);

            if(req.headers['authorization']){
                console.log(req.headers['authorization']);
                res.status(200).send('OK');
            } else res.status(401).send('OK');
        } catch (e) {
            throw new Error(`Error al iniciar servicio: ${e}`);
        }
    });

    app.listen(3000, console.log(`SERVER 3000 OK`));
})();
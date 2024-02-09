const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();
const mimeTypes = require('mime-types');
const multer = require('multer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('./assets', express.static('./assets'));
const port = 7645;

const storageFile = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, `imageFile${Date.now()}.${mimeTypes.extension(file.mimetype)}`);
    },
});

const uploadFile = multer({
    storage: storageFile,
});

app.post('/file', uploadFile.single('imageFile'), (req, res) => {

    res.status(200).json({
        msg: 'El archivo se agrego correctamente',
        urlFile: `https://localhost:${port}/assets/${req?.file?.filename}`
    });
});

app.listen(port, () => {
    console.log('its working on port ' + port);
});
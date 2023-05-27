"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
const path = require("path");
// const multer = require('multer');
// const sharp = require('sharp');  // npm package for image resize and process

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/images', express.static(path.normalize(path.join( __dirname, '/images/products'))));  // required to send file
// console.log(path.join( __dirname, '/images/products'));
// console.log(__filename);
const port = process.env.port || 3000;

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })


// const upload = multer({
//     // dest: 'images',   if not commented file would not be passed to route handler/location function
//     limits : {
//         fileSize : 1000
//     },

//     fileFilter (req, file, cb) {
//         // cb(null, false)
//         // cb(null, true)
//         if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             cb(new Error('Please upload jpg/jpeg/png file.'));
//         }
//         console.log(file.originalname);
//         cb(undefined, true);
//       }
// });

// app.use('/img/uploads', upload.single('productImg'), async (req, res, next)=> {
//     let buffer = await sharp(req.file.buffer).resize({width: 250, height: 250}).png().toBuffer();
//     //save buffer img to db
//     console.log(buffer);
//     res.send({msg: 'file uploaded.'})
// }, (err, req, res, next)=> {
//     res.status(400).send({ error: err.message }); //if err send cb err msg from fileFilter
// })



const userRouter = require('./routes/userRoutes');
app.use('/api', userRouter)

const productRouter = require('./routes/productRoutes');
app.use('/api', productRouter)


app.listen(port, ()=> {
    console.log('Server is running on port ', port);
})
import express = require('express');
const router = express.Router();
import ImageController from '../controllers/image-controller';

const imageController = new ImageController();

router.get('/api/image/:fileName/resize', imageController.resize);

router.get("/", (req, res) => {
    res.send("ok");
});

export default router;
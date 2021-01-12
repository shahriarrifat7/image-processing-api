import fs = require('fs');
import { imageStatic } from '../static/image-static';
import sharp from 'sharp';
import path from 'path';

class ImageController {

   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
   resize = async (req:any, res:any) => {
        const inpDir = path.join(__dirname, '..', 'public', 'images');
        const outDir = path.join(__dirname, '..', 'output-images');
        const fileName = req.params && req.params.fileName;
        const height = req.query && req.query.height;
        const width = req.query && req.query.width;
        const imageFileNameWithoutExt = fileName?.split('.').shift();

        if(this.isFileExists(`${inpDir}/${fileName}`)){
            if(!this.isFileExists(`${outDir}/${imageFileNameWithoutExt}-${width}x${height}.${imageStatic.imageExtension}`)) {
               await sharp(`${inpDir}/${fileName}`)
                .resize({ width: Number(width), height: Number(height) })
                .toFormat('jpeg')
                .png({ quality: 100 })
                .toFile(`${outDir}/${imageFileNameWithoutExt}-${width}x${height}.${imageStatic.imageExtension}`);
                }
    
                const outputFilePath = `${outDir}/${imageFileNameWithoutExt}-${width}x${height}.${imageStatic.imageExtension}`;
                const s = fs.createReadStream(outputFilePath);
                
                s.on('open', function () {
                    res.set('Content-Type', 'image/jpeg');
                    s.pipe(res);
                    
                    
                });
                s.on('error', function () {
                    res.set('Content-Type', 'text/plain');
                    res.status(403).end('Forbidden');
                });
                res.status(200);

            }else {
                res.status(404).end('Not found');
            }  
   };

   isFileExists(fileName:string):boolean {
        try {
            fs.accessSync(fileName, fs.constants.F_OK);
            return true;
        } catch (err) {
            return false;
            
        }
   }
}

export default ImageController;
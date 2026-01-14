const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Unispace_resources',
        allowed_formats: ['jpeg', 'jpg', 'png'],
        transformation: [{ width: 800, height: 600, crop: 'fill' }]
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req,file,cb) => {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/i)) {
            return cb( new Error('Only jpg, png and jpeg files are allowed'), false);
        } else {
            cb(null, true);
        }
    }
});

const uploadResourceImage = (req,res,next) => {
    console.log('entered in upload middleware');
    upload.single('image')(req,res, function(error) {
        if(error instanceof multer.MulterError) {
            return res.status(400).json({
                success: false,
                message: `Multer error: ${error.message}`
            });
        } else if(error) {
            console.log('Error during uploading the image:', error);
            return res.status(400).json({
                success: false,
                message: error.name
            });
        }
        next();
    })
}

module.exports = { uploadResourceImage };
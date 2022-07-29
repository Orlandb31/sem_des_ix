const multer  = require('multer')
const { v4: uuidv4 } = require('uuid');
const { path } = require('path')

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) 
    cb(null,file.fieldname + '-' + uniqueSuffix+'.png')
  }
});

const upload = multer({ storage: storage })
module.exports = upload
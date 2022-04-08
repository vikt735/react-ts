const multer = require( 'multer' );
const moment = require('moment');

const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb( null , 'uploads/' )
},
filename: (req, file, cb) => {
  const date = moment().format('DDMMYYYY--HHmmss_SS');

cb( null , `${date}-${file.originalname}`)
}
});

const types = ['image/png', 'image/jpeg', 'image/jpg'];

const fileFilter = (req, file, cb) => {
  if(types.includes(files.mimetype)) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const limits = {
  fileSize: 1024 * 1024 *5
}
const upload = multer({ storage: storage, fileFilter: fileFilter, limits: limits });

module.exports = multer(upload);
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './static/uploads/');
  },
  filename(req, file, cb) {
    let ext = path.extname(file.originalname)
    cb(null, Date.now() + ext)
  }
})

let upload = multer({
  storage:storage,
  fileFilter: function(req, file, cb) {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
      cb(null, true)
    } else {
      cb(null, false)
    }
  },
  limits: {
    fileSize: 1024 * 1024 *2
  }
})

module.exports = upload;
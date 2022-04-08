const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

const storage = new GridFsStorage({
  url: process.env,
  option: {useNewUrlParser: true, useUnifiedTopology: true},
  file: (req, file) => {
    const match = ['image/png', 'image/jpg'];
    if(match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-ane-name${file.originalname}`
      return filename;
    }
    return {
      bucketName: 'photos',
      filename: `${Date.now()}-ane-name${file.originalname}`
    }
  }
})

module.exports = multer({storage})
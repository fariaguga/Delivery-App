const imageOptions = require('../utils/imageOptions');

async function getImage(req, res, _next) {
  const image = req.path.split('/')[2];

  const PROJECT_PATH = __dirname.split('/back-end')[0];
  const FOLDER_PATH = '/back-end/public/products_images';

  if (imageOptions.includes(image)) {
    return res.sendFile(`${PROJECT_PATH}${FOLDER_PATH}/${image}`);
  }
  return res.status(404).end();
}

module.exports = getImage;

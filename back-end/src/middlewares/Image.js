async function getImage(req, res, _next) {
  const image = req.path.split('/')[2];

  const PROJECT_PATH = '/home/peres/projetos/sd-015-b-project-delivery-app';
  const FOLDER_PATH = '/back-end/public/products_images';

  return res.sendFile(`${PROJECT_PATH}${FOLDER_PATH}/${image}`);
}

module.exports = getImage;

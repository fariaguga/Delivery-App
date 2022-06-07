module.exports = (err, _req, res, _next) => {
  console.log('caiu no middleware de erro:');
  console.error(err);

  if (err.name.includes('Token')) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  if (err.name.includes('Sequelize')) {
    return res.status(777).json({ message: 'erro 2' });
  }

  return res.status(500).json({ error: 'erro interno' });
};

module.exports = (err, _req, res, _next) => {
  console.error(err);

  if (err.name.includes('Token')) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  return res.status(500).json({ error: 'erro interno' });
};

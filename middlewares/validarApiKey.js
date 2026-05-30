const validarApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === '123456') {
    next();
  } else {
    res.status(401).json({ error: 'API Key inválida' });
  }
};

module.exports = validarApiKey;

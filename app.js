const express = require('express');
const app = express();

const logger = require('./middlewares/logger');
const validarApiKey = require('./middlewares/validarApiKey');
const peliculaRoutes = require('./routes/pelicula.routes');
const { sequelize } = require('./services/pelicula.service');

app.use(express.json());
app.use(logger);
app.use(validarApiKey);

app.use('/peliculas', peliculaRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});

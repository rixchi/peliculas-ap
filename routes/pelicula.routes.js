const express = require('express');
const router = express.Router();
const { Pelicula } = require('../services/pelicula.service');

router.get('/', async (req, res) => {
  const peliculas = await Pelicula.findAll();
  res.json(peliculas);
});

router.get('/:id', async (req, res) => {
  const pelicula = await Pelicula.findByPk(req.params.id);
  if (!pelicula) return res.status(404).json({ error: 'No encontrada' });
  res.json(pelicula);
});

router.post('/', async (req, res) => {
  const nueva = await Pelicula.create(req.body);
  res.status(201).json(nueva);
});

router.put('/:id', async (req, res) => {
  const pelicula = await Pelicula.findByPk(req.params.id);
  if (!pelicula) return res.status(404).json({ error: 'No encontrada' });
  await pelicula.update(req.body);
  res.json(pelicula);
});

router.delete('/:id', async (req, res) => {
  const pelicula = await Pelicula.findByPk(req.params.id);
  if (!pelicula) return res.status(404).json({ error: 'No encontrada' });
  await pelicula.destroy();
  res.json({ mensaje: 'Eliminada correctamente' });
});

module.exports = router;

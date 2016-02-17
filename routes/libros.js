var express = require('express');
var router = express.Router();
var Libro = require('../models/libro.js');

router.route('/libros')
	.get(function(req, res) {
		Libro.find(function(err, libros) {
	      if(err) throw err;
	        res.json(libros);
	  });
	})
	.post(function(req, res) {
		var lib = new Libro({
			titulo: req.body.titulo,
			autor: req.body.autor,
			editorial: req.body.editorial
		});

		lib.save(function(err) {
			if(err) {
				return res.send(err);
			}

			res.send({ message: 'Libro added'});
		});
	});

router.route('libros/:titulo').put(function(req, res) {
	Libro.findOne({titulo: req.params.titulo}, function(err, libro) {
		if(err) {
			return res.send(err);
		}
		libro.titulo= req.body.titulo,
		libro.autor= req.body.autor,
		libro.editorial= req.body.editorial

		libro.save(function(err) {
			if(err) {
				return res.send(err);
			}

			res.send({ message: 'Libro added'});
		});
	});
});
router.route('libros/:titulo').get(function(req, res) {
	Libro.findOne({titulo: req.params.titulo}, function(err, libro) {
		if(err) {
			return res.send(err);
		}
		res.json(libro);
	});
});
router.route('libros/:titulo').delete(function(req, res) {
	Libro.remove({titulo: req.params.titulo}, function(err, libro) {
		if(err) {
			return res.send(err);
		}
			res.json({ message: 'Libro deleted'});
	});
});

module.exports = router;
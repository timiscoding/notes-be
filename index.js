require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Note = require('./models/note');

const app = express();

const requestLogger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:', req.path);
  console.log('Body:', req.body);
  console.log('---');
  next();
};

app.use(express.static('build'));
app.use(cors());
app.use(bodyParser());
app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

app.get('/api/notes', (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes.map(note => note.toJSON()));
  });
});

app.get('/api/notes/:id', (req, res, next) => {
  Note.findById(req.params.id)
    .then(note => {
      if (note) {
        res.json(note.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch(error => next(error));
});

app.delete('/api/notes/:id', (req, res, next) => {
  Note.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end();
    })
    .catch(next);
});

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0;

    return maxId + 1;
};

app.post('/api/notes', (req, res, next) => {
  const body = req.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  note.save()
    .then(savedNote => savedNote.toJSON())
    .then(savedAndFormattedNote => res.json(savedAndFormattedNote))
    .catch(next);
});

app.put('/api/notes/:id', (req, res, next) => {
  const body = req.body;
  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(req.params.id, note, { new: true })
    .then(updatedNote => {
      res.json(updatedNote.toJSON());
    })
    .catch(next);
});

const errorHandler = (error, req, res, next) => {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).send({ error: error.message })
  }
  next(error);
};
app.use(errorHandler);

const unknownEndpoint = (req, res) => {
  res.status(404).send({
    error: 'unknown endpoint'
  });
};
app.use(unknownEndpoint);

const port = process.env.PORT;
app.listen(port, () => console.log('Server running on port', port));



const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
console.log('Connecting to', url);

mongoose.connect(url, { useNewUrlParser: true })
  .then(() => console.log('Connected to mongoDB'))
  .catch(error => {
    console.log('Error connecting to mongoDB', error.message);
  });

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  important: Boolean,
});

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

mongoose.set('useFindAndModify', false);

module.exports = mongoose.model('Note', noteSchema);

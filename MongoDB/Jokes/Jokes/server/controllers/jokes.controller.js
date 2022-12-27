const Joke = require('../models/jokes.model');


// --------------------------Get All Jokes ---------------------------------//
module.exports.findAllJokes = (req, res) => {
Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// -------------------------Get a Single Joke -----------------------------//
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// ---------------------------- Create a Joke -----------------------------//
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
// ------------------------- Update a Joke --------------------------------//
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// ------------------------------Delete a Joke -------------------------------------//
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// ------------------------- Get a Random Joke -------------------------------//

module.exports.findRandomJoke = (req, res) => {
    Joke.aggregate([{ $sample:{size: 1}}])
        .then(randomJoke => res.json({ joke: randomJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}



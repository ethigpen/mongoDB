const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res)=>{
    Joke.find()
    .then(allJokes =>{
        res.json({results: allJokes})
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.createNewJoke = (req, res)=>{
    Joke.create(req.body)
    .then( newJoke =>{
        res.json({results: newJoke })
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id:req.params.id})
    .then( foundJoke =>{
        res.json({results: foundJoke })
    })
    .catch(err=>{
        res.json({err:err})
    })
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true, runValidators: true } 
    )
        .then(updatedJoke => {
            res.json({ results: updatedJoke })
        })
        .catch(err=>{
            res.json({err:err})
        })
        
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=>{
            res.json({err:err})
        })
}
// implement your posts router here

const db = require('./posts-model')
const express = require('express');


const router = express.Router();
//PLACE END POINTS BELOW
//PLACE END POINTS BELOW

router.get('/', (req,res) => {
    db.find(req.query)
    .then((post) => {
        res.status(200).json(post);
    })
    .catch((error) => {
        console.log(error)
        res.status(500).json({message: "The posts information could not be retrieved"})
    });
});

router.get('/:id', (req, res) => {
    db.findById(req.params.id)
    .then(post => {
        if(post) {
            res.status(200).json(post);
        } else{
            res.status(404).json({message: "The post with the specified ID does not exist"})
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "The post information could not be retrieved"})
    });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    db.update(req.params.id, changes)
    .then(post => {
        if(post) {
            res.status(200).json(post);
        }else {
            res.status(404).json({message: "The post with the specified ID does not exist"})
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "The post information could not be modified"})
    });
});
// ask about missing requirements!!!!!!

router.delete("/:id", (req, res) => {
    const id = req.params.id
    .then(post => {
        if(post === id ){
            // db.remove(id)
            res.status(200).json({message: "post cannot cancel culture you now"})
        }else{
            res.status(404).json({message: "post cannot be found"})
        }
    })
})

router.get("/:id/comments", (req, res) => {
    db.findById(req.params.id)
    .then(comment => {
        if(comment) {
            res.status(200).json(comment);
        } else{
            res.status(404).json({message: "The post with the specified ID does not exist" })
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({messge: "The comments information could not be retrieved"})
    })

  });


module.exports = router; 
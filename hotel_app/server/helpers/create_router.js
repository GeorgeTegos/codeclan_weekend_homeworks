const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectID(id) })
      .then((doc) => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  });

  router.post('/',(req,res)=>{
    const booking = req.body

    collection.insertOne(booking)
    .then(doc => res.json(doc))
    .catch(err => {
        res.status(500);
        res.json({status: 500, error:err})
    });
  });

  router.delete('/:id', (req,res)=>{
    const itemToDelete = req.params.id

    collection.deleteOne({_id: ObjectID(itemToDelete)})
    .then(doc => res.json(doc))
    .catch(err => {
        res.status(500);
        res.json({status: 500, error:err})
    });
  });

  router.put('/:id', (req,res)=>{
    const itemToEdit = req.params.id
    const newDataOfItem = req.body

    collection.updateOne({_id: ObjectID(itemToEdit)} , {$set: newDataOfItem})
    .then(doc => res.json(doc))
    .catch(err =>{
        res.status(500)
        res.json({status: 500, error:err})
    });
  });


  return router;
};

module.exports = createRouter;
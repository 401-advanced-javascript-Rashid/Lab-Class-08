'use strict';

const categories = require('../model/categories');
const express = require('express');
const router = express.Router();


router.get('/api/v1/categories',gCate_R);
function gCate_R(req , res , next){
  categories.get()
    .then(data => {
      res.status(200)
        .json(data);
    }).catch(next);
}

router.get('/categories/:_id',getById);
function getById(req , res , next){
  categories.get(req.params._id)
    .then(data => {
      res.status(200)
        .json(data);
    }).catch(next);
}


router.post('/categories',pCate_R);
function pCate_R(req , res , next){
  categories.create(req.body)
    .then(data => {
      res.status(201)
        .json(data);
    })
    .catch(next);
}


router.put('/categories/:_id',updateById);
function updateById(req , res , next){
  categories.update(req.params._id , req.body)
    .then(data => {
      res.status(201)
        .json(data);
    });
}


router.delete('/categories/:_id',deleteById);
function deleteById(req , res , next){
  categories.delete(req.params._id)
    .then(data => {
      res.status(200)
        .json(data);
    });
}


module.exports = router ;
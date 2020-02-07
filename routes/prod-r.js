'use strict';

const categories = require('../model/products');
const express = require('express');
const router = express.Router();


router.get('/products',gProd_R);
function gProd_R(req , res , next){
  categories.get()
    .then(data => {
      res.status(200)
        .json(data);
    }).catch(next);
}

router.get('/products/:_id',getById);
function getById(req , res , next){
  categories.get(req.params._id)
    .then(data => {
      res.status(200)
        .json(data);
    }).catch(next);
}


router.post('/products',pCate_R);
function pCate_R(req , res , next){
  categories.create(req.body)
    .then(data => {
      res.status(201)
        .json(data);
    })
    .catch(next);
}


router.put('/products/:_id',updateById);
function updateById(req , res , next){
  categories.update(req.params._id , req.body)
    .then(data => {
      res.status(201)
        .json(data);
    });
}


router.delete('/products/:_id',deleteById);
function deleteById(req , res , next){
  categories.delete(req.params._id)
    .then(data => {
      res.status(200)
        .json(data);
    });
}


module.exports = router ;

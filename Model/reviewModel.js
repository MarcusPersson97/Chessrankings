const mongoose = require("mongoose");
const reviewSchema = require("../reviewSchema");

async function createReview(reviewData) {

  return await reviewSchema.create(reviewData);

}


async function getAllReviews() {

  return await reviewSchema.find().populate("playerId");
    
}

async function getReview(id){

  return await reviewSchema.find(id);

}

module.exports = {createReview, getAllReviews, getReview};
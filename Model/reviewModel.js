const mongoose = require("mongoose");
const reviewSchema = require("../reviewSchema");

async function createReview(reviewData) {

  return await reviewSchema.create(reviewData);

}


async function getAllReviews() {

  return await reviewSchema.find().populate("playerId");
    
}

module.exports = {createReview, getReviews};
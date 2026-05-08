const reviewModel = require("../Model/reviewModel");
const mongoose = require("mongoose");

async function createReview(req, res) {

  try {
    const {
      playerId,
      review,
      rating,
      name
    } = req.body;

    if (
      !playerId ||
      !review ||
      !rating ||
      !name
    ) {
      return res.status(400).json({
        error: "Missing required fields"
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        error: "Rating must be between 1 and 5"
      });
    }

    const newReview = await reviewModel.createReview({
      playerId,
      review,
      rating,
      name
    });

    res.status(201).json(newReview);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error"
    });
  }
}


async function getReviews(req, res) {

  try {
    const reviews = await reviewModel.getAllReviews();

    res.status(200).json(reviews);

  } 
  
  catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error"
    });
  }
}


module.exports = {createReview, getReviews};
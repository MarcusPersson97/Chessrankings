const express = require("express");
const router = express.Router();
const reviewController = require("../Controller/reviewController");

router.post('/', reviewController.createReview);
router.get('/', reviewController.getReviews);

module.exports = router;
"use strict";

var rentalData = require('./rentalData').rentals;
var reviewData = require('./rentalData').reviews;
var _ = require('lodash');

var _generateId = function(rental) {
  return rental.address.toLowerCase();
};

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); // cloned copy by value instead of by reference
};

var rentalApi = {
  getAllRentals: function() {
    return _clone(rentalData);
  },

  getAllReviews: function() {
    return _clone(reviewData);
  },

  getRentalById: function(id) {
    var rental = _.find(rentals, {id: id});
    return _clone(rental);
  },

  getReviewById: function(id) {
    var review = _.find(reviews, {revid: id});
    return _clone(review);
  },

  getReviewsForRentalId: function(id) {
 var filteredReviews = reviewData.filter(function(obj) {
   return obj.rentalid == id;
 });
 return _clone(filteredReviews[0]);
}

};

module.exports = rentalApi;

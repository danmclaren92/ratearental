"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/ActionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _rentals = [];

var RentalStore = assign({}, EventEmitter.prototype, {

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getAllRentals: function() {
    return _rentals;
  },

  getRentalById: function(ider) {
    // TODO: Fix this kludgy kludge kludge kludge
    var tental = _rentals.filter(function(obj) {
      return obj.id == ider;
    });
    return tental[0];
  }

});

Dispatcher.register(function(action) {
  switch(action.actionType) {

    case ActionTypes.INITIALIZE:

        _rentals = action.initialData.rentals;
        RentalStore.emitChange();
        break;

    default:
        break;

  }

});

module.exports = RentalStore;

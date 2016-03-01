"use strict";

var Dispatcher = require('../dispatcher/appDispatcher.js');
var ActionTypes = require('../constants/ActionTypes.js');
var RentalApi = require('../api/rentalApi.js');

var InitializeActions = {

  initApp: function() {
    Dispatcher.dispatch({

      actionType: ActionTypes.INITIALIZE,
      initialData: {
        rentals: RentalApi.getAllRentals()
      }

    });
  }

};

module.exports = InitializeActions;

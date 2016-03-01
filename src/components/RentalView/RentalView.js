/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './RentalView.scss';
import withStyles from '../../decorators/withStyles';
import RentalStore from '../../stores/rentalStore.js';
import rentalApi from '../../api/rentalApi.js';
import RentalInfo from '../RentalInfo/RentalInfo.js';
import RentalReviews from '../RentalReviews/RentalReviews.js'
const title = 'Rental View Component';

@withStyles(s)
class RentalView extends Component {

  constructor(props) {
    super(props);
    this.state = { rental: RentalStore.getRentalById(this.props.id), reviews: rentalApi.getReviewsForRentalId(this.props.id) };
  }


  componentWillMount() {
    this.context.onSetTitle(title);
    RentalStore.addChangeListener(this._onChange);

    $.post( "http://127.0.0.1:3001/rental", { address: this.state.rental.address, city: this.state.rental.city, state: this.state.rental.state, zip: this.state.rental.zip })
      .done(function( data ) {
        // This should be the output JSON object from geocoding response you got in the test index.js
        console.log('data');
        console.log(data);
      });

  }

  componentWillUnmount() {
    RentalStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ rental: RentalStore.getRentalById(this.props.id), reviews: rentalApi.getReviewsForRentalId(this.props.id) });
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    id: PropTypes.number
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className="rental-view">
        <h1>Rental View Component</h1>
        <RentalInfo rental={this.state.rental} />
        <br />
        <RentalReviews reviews={this.state.reviews} />
        <br />

      </div>
    );
  }

}

export default RentalView;

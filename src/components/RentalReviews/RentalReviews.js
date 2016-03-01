/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import RentalStore from '../../stores/rentalStore.js';
import rentalApi from '../../api/rentalApi.js';

const title = 'Rental Review Component';

class RentalReviews extends Component {

  constructor(props) {
    super(props);
    this.state = { reviews: this.props.reviews };
  }


  componentWillMount() {
    this.context.onSetTitle(title);
    RentalStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    RentalStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ reviews: rentalApi.getReviewsForRentalId(this.props.id) });
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    reviews: PropTypes.object.isRequired
  };


  render() {

    return (
      <div className="rental-reviews">
        <h1>{title}</h1>
        <b>{this.state.reviews.user}</b>
        <br />
        {this.state.reviews.description}
      </div>
    );
  }

}

export default RentalReviews;

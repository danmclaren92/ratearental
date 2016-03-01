/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from '../RentalView/RentalView.scss';
import withStyles from '../../decorators/withStyles';
import RentalStore from '../../stores/rentalStore.js';
import rentalApi from '../../api/rentalApi.js';

import {default as FaSpinner} from "react-icons/lib/fa/spinner";

import Map from '../Map';

const title = 'Rental Info Component';

@withStyles(s)
class RentalInfo extends Component {

  constructor(props) {
    super(props);
    this.state = { rental: this.props.rental };
  }

  componentWillMount() {
    this.context.onSetTitle(title);
    RentalStore.addChangeListener(this._onChange);

  }

  componentWillUnmount() {
    RentalStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ rental: RentalStore.getRentalById(this.props.id) });
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    rental: PropTypes.object
  };


  render() {

    if(this.state.rental) {

      return (
        <div className="rental-info-component">

          <div className="rental-info">
              <h1>{title}</h1>
              <br />
              <b>Address:</b> {this.state.rental.address}
              <br />
              <b>City:</b> {this.state.rental.city}
              <br />
              <b>State:</b> {this.state.rental.state}
              <br />
              <b>ZIP:</b> {this.state.rental.zip}
          </div>

          <div className={s.map}>
            <Map lat={this.state.rental.lat} lon={this.state.rental.lon}/>
          </div>

        </div>
      );

    } else {

      return (
        <div><FaSpinner /></div>
      );

    }
  }

}

export default RentalInfo;

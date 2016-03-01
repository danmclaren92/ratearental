/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './RentalList.scss';
import Link from '../Link';
import withStyles from '../../decorators/withStyles';
import RentalStore from '../../stores/rentalStore.js'

const title = 'Rental List Component';

@withStyles(s)
class RentalList extends Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    rentals: PropTypes.array
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    var createRentalRow = function(rental) {
      return (
        <tr key={rental.id}>
          <td> <Link className={s.link} to={"/rental/" + rental.id}>{rental.address}</Link></td>
          <td>{rental.city}</td>
          <td>{rental.state}</td>
          <td>{rental.zip}</td>
        </tr>
      )
    };

    return (
      <div>
          <h1>{title}</h1>
          <table className="table">
            <thead>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
            </thead>
            <tbody>
              {this.props.rentals.map(createRentalRow, this)}
            </tbody>
          </table>
        </div>
    );
  }

}

export default RentalList;

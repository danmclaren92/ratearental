/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './RentalPage.scss';
import withStyles from '../../decorators/withStyles';
import RentalList from '../RentalList';
import RentalStore from '../../stores/rentalStore';
import RentalActions from '../../actions/rentalActions';

const title = 'Rental Page Component';

@withStyles(s)
class RentalPage extends Component {

  constructor(props) {
    super(props);
    this.state = { rentals: RentalStore.getAllRentals() };
    console.log(this.state);
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.context.onSetTitle(title);
    RentalStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    RentalStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({ rentals: RentalStore.getAllRentals() });
    console.log("Changed");
    console.log(this.state);
  }


  render() {
    console.log("Render state");
    console.log(this.state);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <RentalList rentals={this.state.rentals} />
        </div>
      </div>
    );
  }

}

export default RentalPage;

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './HomePage.scss';
import withStyles from '../../decorators/withStyles';

const title = 'RateARental';

@withStyles(s)
class HomePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>


          <header>
              <div className={s.container}>
                  <div className="row">
                      <div className="col-lg-12">
                          <div className={s.introText}>
                              <p className={s.info}>Welcome to RateARental!</p>
                              <p className={s.info}>Search for rentals and read reviews from previous tenants</p>
                          </div>
                      </div>
                  </div>
              </div>
          </header>


        </div>
      </div>
    );
  }

}

export default HomePage;

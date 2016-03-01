/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './NotFoundPage.scss';
import withStyles from '../../decorators/withStyles';

const title = 'Page Not Found';

@withStyles(s)
class NotFoundPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
    this.context.onPageNotFound();
  }

  render() {
    return (
      <div className={s.bernie}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Dhot2OJKKZc" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }

}

export default NotFoundPage;

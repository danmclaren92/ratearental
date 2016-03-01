/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import {GoogleMap, Marker} from "react-google-maps";
import {default as FaSpinner} from "react-icons/lib/fa/spinner";
import {default as ScriptjsLoader} from "react-google-maps/lib/async/ScriptjsLoader";


const title = 'Map';

class Map extends Component {

  static version = Math.ceil(Math.random() * 22);
  constructor(props) {
    super(props);
  }


  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };


  render() {

        return (
          <ScriptjsLoader
            hostname={"maps.googleapis.com"}
            pathname={"/maps/api/js"}
            query={{v: `3.${ Map.version }`, libraries: "geometry,drawing,places"}}
            loadingElement={
              <div>
                <FaSpinner />
              </div>
            }
            containerElement={
              <div style={{height: '500px', width:'600px'}} />
            }
            googleMapElement={
              <GoogleMap
                defaultZoom={15}
                defaultCenter={{lat: this.props.lat, lng: this.props.lon}}
              >
              </GoogleMap>
            }
          />
        );
  }

}

export default Map;

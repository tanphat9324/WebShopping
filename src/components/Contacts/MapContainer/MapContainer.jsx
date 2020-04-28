import React, { PureComponent } from 'react'
import './MapContainer.scss';

export default class MapContainer extends PureComponent {
    render() {
        return (
            <div class="row">
            <div class="col">
              <div id="google_map">
                <div class="map_container">
                  <div id="map"></div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

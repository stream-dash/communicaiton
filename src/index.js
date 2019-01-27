// @flow

import type Layer from './layer';

export default class Communicator {
  layers: Array<Layer> = [];

  addLayer(layer: Layer) {
    this.layers.push(layer);
  }
}

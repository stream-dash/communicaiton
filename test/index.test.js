import test from 'ava';
import Communicator from '../src';
import Layer from '../src/layer';

test('can add layers', t => {
  const com = new Communicator();
  const layer = new Layer({name: 'test'});

  com.addLayer(layer);

  t.is(com.layers[0], layer);
});

import test from 'ava';
import {stub} from 'sinon';
import Layer from '../src/layer';

test('can create a named layer', t => {
  const name = 'test';
  const testLayer = new Layer({name});

  t.is(testLayer.name, name);
});

test('can define routes', t => {
  const layer = new Layer({name: 'test'});

  const input = 'in_name';
  const output = 'out_name';

  layer.defineRoute(input, output);

  t.is(layer.routes[input], output);
});

test('can accept subscribers', t => {
  const layer = new Layer({name: 'test'});

  const subscriber1 = Symbol('subscriber1');
  const subscriber2 = Symbol('subscriber2');

  layer.subscribe(subscriber1);
  layer.subscribe(subscriber2);

  t.is(layer.subscribers[0], subscriber1);
  t.is(layer.subscribers[1], subscriber2);
});

test('can publish to subscribers', t => {
  const spyA = stub();
  const spyB = stub();

  const layer = new Layer({name: 'test'});

  const sub1 = {onMessage: spyA};
  const sub2 = {onMessage: spyB};

  layer.subscribe(sub1);
  layer.subscribe(sub2);

  const data = {msg: 'Hello'};
  layer.publish(data);

  t.true(spyA.calledWith(data));
  t.true(spyB.calledWith(data));
});

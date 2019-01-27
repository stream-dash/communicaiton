// @flow

type Params = {
  name: string
};

type Subscriber = {
  onMessage: Function
};

export default class Layer {
  name: string;

  subscribers: Array<Subscriber> = [];
  routes: {[string]: string} = {};

  constructor({name}: Params) {
    this.name = name;
    this.routes = {};
  }

  defineRoute(input: string, output: string) {
    this.routes[input] = output;
  }

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  publish(data: any) {
    for (const subscriber of this.subscribers) {
      subscriber.onMessage(data);
    }
  }
}

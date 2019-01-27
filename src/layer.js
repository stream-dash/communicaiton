// @flow

type Params = {
  name: string
};

export default class Layer {
  name: string;

  subscribers: Array<any> = [];
  publishers: Array<any> = [];
  routes: {[string]: string} = {};

  constructor({name}: Params) {
    this.name = name;
    this.routes = {};
  }

  defineRoute(input: string, output: string) {
    this.routes[input] = output;
  }

  subscribe(subscriber: any) {
    this.subscribers.push(subscriber);
  }

  addPublisher(publisher: any) {
    this.publishers.push(publisher);
  }
}

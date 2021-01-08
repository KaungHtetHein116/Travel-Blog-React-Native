import {Model, Response, createServer} from 'miragejs';
import allFactories from './factories';
import allRoutes from './routes';

const dataServer = () =>
  createServer({
    models: {
      destination: Model,
    },
    factories: {
      destination: allFactories.destination,
    },
    seeds(server) {
      server.createList('destination', 6);
    },
    routes() {
      allRoutes(this, Response);
    },
  });

export default {dataServer};

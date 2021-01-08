import {Factory} from 'miragejs';
import faker from 'faker';

export default Factory.extend({
  id(i) {
    return i + 1;
  },
  user() {
    return {
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
    };
  },
  saved: faker.random.boolean(),
  location: faker.address.city(),
  temperature: Math.floor(Math.random() * (40 - 30)),
  title: faker.lorem.words(),
  description: faker.lorem.paragraphs(),
  rating: 3,
  reviews: faker.random.number(),
  preview: faker.image.nature(),
  images: [
    {
      source: {
        uri: faker.image.nature(),
      },
    },
    {
      source: {
        uri: faker.image.nature(),
      },
    },
    {
      source: {
        uri: faker.image.nature(),
      },
    },
    {
      source: {
        uri: faker.image.nature(),
      },
    },
  ],
});

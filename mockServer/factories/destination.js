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
  rating: Math.floor(Math.random() * (5 - 1)),
  reviews: faker.random.number(),
  preview: faker.image.imageUrl(),
  images: [
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
    faker.image.imageUrl(),
  ],
});

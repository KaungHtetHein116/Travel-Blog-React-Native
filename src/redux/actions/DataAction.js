import {createServer} from 'miragejs';
import {GET_DATA, GET_DATA_SUCCESS} from './types';

if (window.server) {
  server.shutdown();
}

window.server = createServer({
  routes() {
    this.get('/api/destinations', () => {
      return {
        destinations: [
          {
            id: 1,
            user: {
              name: 'Lelia Chavez',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            saved: true,
            location: 'Santorini, Greece',
            temperature: 34,
            title: 'Santorini',
            description:
              'Santorini is one ofsad fasdfasdfaasdf asdf sad fkasjdfj; laj;lkajsd;fkjalkfj j ;kj k;l lj lkasj ;lask j;lskjd f;akjf ;kjdf;kasjdfkj dfkjasdkfj sakfjaksdfasjdhfajsdfiausydfiuaydsfi ai yfoiua dshfjashd flkjhad slkfjhalsd ufasi ufpasiu fpoiasu fpoiusdfasdf sadf a sdf sa df as df as df as df as df asd f asdf  asdf as df sa df as df a sdf as df a sdf  sadf  asdf s dfs af s af as fd as df asdf sa  the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.adsfasdf asdf asdf asdf asdf asdf asdf adsf asdf asd fasd f asdf asdf asdf asdf asdf asd fasdf asdfasdfasdfa sdfa sdf asdfasdfasdf asdf asdf sadf asfd ',
            rating: 4.3,
            reviews: 3212,
            preview:
              'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            images: [
              'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
              'https://randomuser.me/api/portraits/women/44.jpg',
              'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
              'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            ],
            images: [
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
              {
                source: {
                  uri: 'https://randomuser.me/api/portraits/women/44.jpg',
                },
              },
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
            ],
          },
          {
            id: 2,
            user: {
              name: 'Lelia Chavez',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            saved: false,
            location: 'Loutraki, Greece',
            temperature: 34,
            title: 'Loutraki',
            description:
              'This attractive small town, 80 kilometers from Athens',
            rating: 4.6,
            reviews: 3212,
            preview:
              'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            images: [
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
              {
                source: {
                  uri: 'https://randomuser.me/api/portraits/women/44.jpg',
                },
              },
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
            ],
          },
          {
            id: 3,
            user: {
              name: 'Lelia Chavez',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            saved: true,
            location: 'Santorini, Greece',
            temperature: 34,
            title: 'Santorini',
            description: 'Santorini - Description',
            rating: 3.2,
            reviews: 3212,
            preview:
              'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
            images: [
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
              {
                source: {
                  uri: 'https://randomuser.me/api/portraits/women/44.jpg',
                },
              },
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
            ],
          },
          {
            id: 4,
            user: {
              name: 'Lelia Chavez',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            location: 'Loutraki, Greece',
            temperature: 34,
            title: 'Loutraki',
            description:
              'This attractive small town, 80 kilometers from Athens',
            rating: 5,
            reviews: 3212,
            preview:
              'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
            images: [
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
              {
                source: {
                  uri: 'https://randomuser.me/api/portraits/women/44.jpg',
                },
              },
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
              {
                source: {
                  uri:
                    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
                },
              },
            ],
          },
        ],
      };
    });
  },
});

export const ApiCall = () => {
  return (dispatch) => {
    dispatch({type: GET_DATA});
    fetch('/api/destinations')
      .then((res) => res.json())
      .then((json) =>
        dispatch({type: GET_DATA_SUCCESS, payload: json.destinations}),
      );
  };
};

import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'bb6b96713f9e8da3d3cc4e5c4f99f2a5',
  },
});

import axios from 'axios';

/* -----------------    STATE     ------------------ */

const initialState = {
  noise: [],
  graffiti: [],
  food: []
};

/* -----------------    ACTIONS     ------------------ */

const GET_FOOD = 'GET_FOOD';
const GET_NOISE = 'GET_NOISE';
const GET_GRAFFITI = 'GET_GRAFFITI';

/* -----------------    ACTION CREATORS     ------------------ */

const getFood = food => ({ type: GET_FOOD, food });
const getNoise = noise => ({ type: GET_NOISE, noise });
const getGraffiti = graffiti => ({ type: GET_GRAFFITI, graffiti });


/* -----------------    REDUCER     ------------------ */

export default function reducer(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case GET_FOOD:
      newState.food = action.food;
      break;
    case GET_NOISE:
      newState.noise = action.noise;
      break;
    case GET_GRAFFITI:
      newState.graffiti = action.graffiti;
      break;
    default:
      return state;
  }

  return newState;
}

/* -----------------    THUNK CREATORS     ------------------ */

export const fetchFood = () => dispatch => {
  return axios
    .get('/api/map/food')
    .then(res => res.data)
    .then(food => {
      const action = getFood(food);
      dispatch(action);
    })
    .catch(err => console.log(err));
};

export const fetchNoise = () => dispatch => {
  return axios
    .get('/api/map/noise')
    .then(res => res.data)
    .then(noise => {
      const action = getNoise(noise);
      dispatch(action);
    })
    .catch(err => console.log(err));
};


export const fetchGraffiti = () => dispatch => {
  return axios
    .get('/api/map/graffiti')
    .then(res => res.data)
    .then(graffiti => {
      const action = getGraffiti(graffiti);
      dispatch(action);
    })
    .catch(err => console.log(err));
};

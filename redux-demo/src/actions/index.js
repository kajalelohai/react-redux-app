import { INCREMENT, DECREMENT } from '../constants/action-types.js';

export const incrementValue = (value) => ({
  type: INCREMENT,
  value
});

export const decrementValue = (value) => ({
  type: DECREMENT,
  value
});

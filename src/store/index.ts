import {
    atom,
  } from 'recoil';

export const favState = atom({
    key: 'favoriteFlights', 
    default: [], 
  });
import {
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_PLAYLIST,
  ADD_PLAYLIST
} from '../utils/constants';
import { get } from '../utils/api';
export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums
});
export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums
});
export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});
export const addArtists = (artists) => ({

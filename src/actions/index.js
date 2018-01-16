import axios from 'axios';

export const FETCH_GURUS = 'fetch_gurus';

const ROOT_URL = 'http://taketeacher.local/v1';
const API_KEY = '?access-token=4Bm_Y-G6RoxgJo0SUaOcrwOwNeCjrhx9';

export function fetchGurus() {
  const request = axios.get(`${ROOT_URL}/gurus${API_KEY}`);

  return {
    type: FETCH_GURUS,
    payload: request
  }
}

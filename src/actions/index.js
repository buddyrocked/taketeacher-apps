import axios from 'axios';

export const HOME = 'home';

export const FETCH_GURUS = 'fetch_gurus';
export const CREATE_TEACHER = 'create_teacher';

export const FETCH_STUDENTS = 'fetch_students';
export const CREATE_STUDENT = 'create_student';

const ROOT_URL = 'http://localhost/taketeacher/backend/web/v1';
const API_KEY = '?access-token=4Bm_Y-G6RoxgJo0SUaOcrwOwNeCjrhx9';

export function home() {
  const request = {
                    data : {
                              title : 'Ini Title'
                    }
                  };
  console.log(request);
  return {
    type: HOME,
    payload: request
  }
}

export function fetchGurus() {
  const request = axios.get(`${ROOT_URL}/gurus${API_KEY}`);

  return {
    type: FETCH_GURUS,
    payload: request
  }
}

export function createTeacher(values, callback) {
  const request = axios.post(`${ROOT_URL}/gurus${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_TEACHER,
    payload: request
  }
}

export function fetchStudents() {
  const request = axios.get(`${ROOT_URL}/murids${API_KEY}`);

  return {
    type: FETCH_STUDENTS,
    payload: request
  }
}

export function createStudent(values, callback) {
  const request = axios.post(`${ROOT_URL}/auth/register`, values)
    .then(() => callback());

  return {
    type: CREATE_STUDENT,
    payload: request
  }
}

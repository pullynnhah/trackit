import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function generateHeader(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
}

function signup(body) {
  return axios.post(`${BASE_URL}/auth/sign-up`, body);
}

function login(body) {
  return axios.post(`${BASE_URL}/auth/login`, body);
}

function createHabit(body, token) {
  return axios.post(`${BASE_URL}/habits`, body, generateHeader(token));
}

function toggleHabit(id, isChecked, token) {
  const check = isChecked ? "uncheck" : "check";
  return axios.post(`${BASE_URL}/habits/${id}/${check}`, {}, generateHeader(token));
}

function listHabits(token) {
  return axios.get(`${BASE_URL}/habits`, generateHeader(token));
}

function getTodayHabits(token) {
  return axios.get(`${BASE_URL}/habits/today`, generateHeader(token));
}

function getHistory(token) {
  return axios.get(`${BASE_URL}/habits/history/daily`, generateHeader(token));
}

function deleteHabit(id, token) {
  return axios.delete(`${BASE_URL}/habits/${id}`, generateHeader(token));
}

export {
  signup,
  login,
  createHabit,
  toggleHabit,
  listHabits,
  getTodayHabits,
  getHistory,
  deleteHabit
};

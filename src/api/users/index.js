import axios from 'src/utils/axiosConfig';

/**
 *
 * @param {Number} user
 * @returns Object
 */
export const fetchUser = async (id) => {
  const { data } = await axios.get(`/api/users/${id}`);
  return data;
};

/**
 * Fetch list of users
 * @param {Number} page
 * @returns Object
 */
export const fetchUsers = async (page) => {
  const { data } = await axios.get(`/api/users?page=${page}`);
  return data;
};

/**
 * Post and create a user
 * @param {Number} page
 * @returns Function
 */
export const createUser = async (user) => {
  const { data } = await axios.post('https://reqres.in/api/users', user);
  return data;
};

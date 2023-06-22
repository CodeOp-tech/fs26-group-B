import axios from "axios"

export const getUser = async (userId) => {
  await axios.get(`/users/${userId}`)
};
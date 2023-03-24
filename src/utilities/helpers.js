import axios from 'axios';

axios.defaults.baseURL = 'https://backend.petly.club';

export const fetchOurFriends = async () => {
  return await axios
    .get(`/servicesSidebar`)
    .then(response => response.data)
    .catch(err => console.log(err));
};

export const getNoticesByCategories = async category => {
  try {
    const response = await axios.get(`/notices/category?category=${category}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchNews = async () => {
  return await axios
    .get(`/news`)
    .then(response => response.data)
    .catch(err => console.log(err));
};

export const fetchUserAndPets = async token => {
  try {
    const response = await axios.get(`/userAndPets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

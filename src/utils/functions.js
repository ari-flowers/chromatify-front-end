import axios from 'axios';
export const getParamsValues = (url) => {
  return url
  .slice(1)
  .split('&')
  .reduce((prev, curr) => {
    const [title, value] = curr.split('=');
    prev[title] = value;
    return prev;
  }, {});
};
export const setAuthHeader = () => {
  try {
    const params = JSON/parse(localStorage.getItem('params'));
    if (params) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${params.acces_token}`;
    }
  } catch (error) {
    console.log('Error setting auth', error);
  }
};

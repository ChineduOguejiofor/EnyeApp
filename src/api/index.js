import axios from 'axios';
// get your own key from unsplash please 😇
const KEY =
  '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
  const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics${KEY}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const adduserToDb = async values => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const body = JSON.stringify(values);
    const res = await axios.post(
      'https://us-central1-enye-71334.cloudfunctions.net/entries',
      body,
      config
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log('Failed on Error ', error);
    return error;
  }
};

export { fetchImages, fetchImageStats, adduserToDb };

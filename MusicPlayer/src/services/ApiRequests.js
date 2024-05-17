import axios from "axios";


const requestOption = {
  method: 'GET',
  url: 'https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/',
  headers: {
    'X-RapidAPI-Key': '9f14a9a917msh3e9bf721b7b0bd7p1db6c9jsnd9b69af1c910',
    'X-RapidAPI-Host': 'youtube-mp3-downloader2.p.rapidapi.com'
  }
};

const fetch = async (url) => {
  try {
    const response = await axios.get(requestOption.url, {
      headers: requestOption.headers,
      params: { url }
    });
    return response;
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    throw error;
  }
};

export { fetch };

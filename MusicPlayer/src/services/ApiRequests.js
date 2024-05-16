import axios from "axios";

const requestOptions = {
    method: 'GET',
    url: 'https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com/',
    params: { },
    headers: {
      'X-RapidAPI-Key': '9f14a9a917msh3e9bf721b7b0bd7p1db6c9jsnd9b69af1c910',
      'X-RapidAPI-Host': 'coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com'
    }
  };

const fetch = async (id) => {
    requestOptions.params = { id };
    const response = await axios.request(requestOptions);
    return response;
}

export { fetch };
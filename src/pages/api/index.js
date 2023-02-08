import axios from "axios";


const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const options = {
      params: {
        bl_latitude: sw.lat ? sw.lat : 0,
        tr_latitude: ne.lat ? ne.lat : 0,
        bl_longitude: sw.lng ? sw.lng : 0,
        tr_longitude: ne.lng ? ne.lng : 0
      },
      headers: {
        'X-RapidAPI-Key': '3a3bbb6dfbmsh29c363d0699a69cp11a0f8jsn17bc33f7df4d',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    }
    const response =  await axios.get(url, options);
    return response.data.data;

  } catch(err) {
    console.log("error in get places data: ", err);
  }
}
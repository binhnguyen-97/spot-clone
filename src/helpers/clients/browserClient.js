import axios from 'axios';
// import Cookie from 'js-cookie';
// import getAccessToken from "./authClient";
import config from 'config';


// axios.interceptors.response.use(function (response) {
//   return response;
// }, function async(error) {
//   if (error.response?.status === 401) {
//     getAccessToken().then((data) => Cookie.set("accessToken", data));
//     return Promise.resolve({
//       retry: true,
//     })
//   }
//   return Promise.reject(error);
// });


const fetchData = async (endPoint, accessToken) => {
  try {
    const result = await axios.get(`${config.api.baseUrl}${endPoint}`, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      }
    });
    // if (result.retry) {
    //   const newToken = Cookie.get("accessToken");
    //   const refetchData = await fetchData(endPoint, newToken)
    //   console.info(refetchData)
    //   return refetchData?.data
    // } else {
    return result.data
    // }
  } catch (error) {
    return error
  }
}


const fetchNewReleases = async (accessToken) => {
  try {
    const data = await fetchData('/browse/new-releases', accessToken)
    return data?.albums?.items
  } catch (error) {
    return error
  }
}

const fetchFeaturedPlaylist = async (accessToken) => {
  try {
    const data = await fetchData('/browse/featured-playlists', accessToken)
    return data?.playlists?.items
  } catch (error) {
    return error
  }
}


const fetchAllCategories = async (accessToken) => {
  try {
    const data = await fetchData('/browse/categories', accessToken)
    return data?.categories?.items
  } catch (error) {
    return error
  }
}


export {
  fetchNewReleases,
  fetchFeaturedPlaylist,
  fetchAllCategories
}

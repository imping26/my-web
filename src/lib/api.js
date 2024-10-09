import axios from "axios"; 

let privateApi = null;
let publicApi = null;

async function createApi(headers) {
  return axios.create({
    timeout: 8000,
    headers: { 
      ...headers,
    },
  });
}

async function apiRequest(api, method, url, reqData, config) {
  try {
    const response = await api.request({ method, url, data: reqData, config });
    return response.data;
  } catch (error) {
    if (error) {
      console.log(error);
    }
    throw error;
  }
}

async function checkPublic() {
  if (publicApi) return;

  publicApi = await createApi({
    "accept-language": "en-US",
  });
}

export async function publicApiGet(url, reqData) {
  await checkPublic();
  return apiRequest(publicApi, "GET", url, reqData);
}

export async function publicApiPost(url, reqData) {
  await checkPublic();
  return apiRequest(publicApi, "POST", url, reqData);
}
 
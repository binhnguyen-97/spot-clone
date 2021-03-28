import axios from "axios";
import config from "config";

const getAccessToken = async () => {
  const params = new URLSearchParams()
  params.append("grant_type", "client_credentials")
  const clientInfo = `${config.api.clientId}:${config.api.clientSecret}`;

  try {
    const result = await axios.post(config.api.authUrl, params, {
      headers: {
        "Authorization": `Basic ${btoa(clientInfo)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    return result?.data?.access_token || ''
  } catch (error) {
    return error
  }
}

export default getAccessToken

import axios from 'axios'
import { APP_SERVER_URL } from '../config'

export async function fetchUserProfile(id = 1) {
  try {
    const resp = await axios.get(`${APP_SERVER_URL}/users/${id}`)
    return resp
  } catch (e) {
    console.log("Error", e)
  }
}

export async function fetchMyBoard(id = 1) {
  try {
    const resp = await axios.get(`${APP_SERVER_URL}/users/${id}/board`)
    return resp
  } catch (e) {
    console.log("Error", e)
  }
}
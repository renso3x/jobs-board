import axios from 'axios'
import { APP_SERVER_URL } from '../config'

export async function fetchJobsBoard(fromDate) {
  try {
    const resp = await axios.get(`${APP_SERVER_URL}/jobs?page=1&limit=10&&filterDate=${fromDate}`)
    return resp
  } catch (e) {
    console.log("Error", e)
  }
}

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'

import './job.module.scss'
import { fetchJobsBoard } from '../../service/jobs.service'
import { updateDate, updateJobBoard } from '../../features/job/jobSlice'
import { getForthNight } from "../../util/date"

export function Board() {
  const jobStore = useSelector((state) => state.job)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchData()

    return () => {
      fetchData()
    }
  }, [])

  async function fetchJobs() {
    const filterDate = jobStore.date || dayjs().format('MM-DD-YYYY')
    const jobs = await fetchJobsBoard(filterDate)
    dispatch(updateJobBoard(jobs.data))
  }

  function setDate() {
    const currDate = dayjs().format('MM-DD-YYYY')
    dispatch(updateDate(currDate))
  }

  function fetchData() {
    setDate()
    fetchJobs()
  }

  const handleLoadJobBoard = (direction) => {
    const { from } = getForthNight(jobStore.date, direction)

    switch (direction) {
      case 'prev':
        dispatch(updateDate(from))
        fetchJobs()
        break
      case 'next':
        dispatch(updateDate(from))
        fetchJobs()
        break

      default:
    }
  }

  return (
    <>
      <h1>Job board</h1>
      <button onClick={handleLoadJobBoard.bind(this, 'prev')}>Prev</button>
      <button onClick={handleLoadJobBoard.bind(this, 'next')}>Next</button>
      <ul>
        {jobStore.board.map(item => (
          <li key={item.id}>
            {item.jobName}
          </li>
        ))}
      </ul>
    </>
  );
}

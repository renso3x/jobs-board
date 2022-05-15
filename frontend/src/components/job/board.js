import React, { useEffect, Fragment, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'

import { fetchJobsBoard } from '../../service/jobs.service'
import { updateDate, updateJobBoard } from '../../features/job/jobSlice'
import { formatDateRange, getForthNight } from "../../util/date"
import { JobCard } from "./job-card"
import styles from './board.module.scss'

export function Board() {
  const [isLoading, setLoading] = useState(false)
  const jobStore = useSelector((state) => state.job)
  const userStore = useSelector((state) => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    fetchData()

    return () => {
      setLoading(true)
    }
  }, [])

  async function fetchJobs() {
    const filterDate = jobStore.date || dayjs().format('MM-DD-YYYY')
    const jobs = await fetchJobsBoard(filterDate)
    if (!isLoading) {
      dispatch(updateJobBoard(jobs.data))
    }
  }

  function setDate() {
    const currDate = dayjs().format('MM-DD-YYYY')
    dispatch(updateDate(currDate))
  }

  function fetchData() {
    setDate()
    if (!jobStore.isFetching) fetchJobs()
  }

  const handleLoadJobBoard = (direction) => {
    const { from } = getForthNight(jobStore.date, direction)

    switch (direction) {
      case 'prev':
        dispatch(updateDate(from))
        setLoading(false)
        fetchJobs()
        break
      case 'next':
        dispatch(updateDate(from))
        setLoading(false)
        fetchJobs()
        break

      default:
    }
  }

  return (
    <Fragment>
      {
        userStore.myBoard.length > 0 && (
          <>
            <h1>Shifts</h1>
            <h2>You've been invited</h2>
            {userStore.myBoard.map(job => (
              job &&
              <JobCard
                key={job.id}
                jobStatus="invited"
                job={job}
              />
            ))}
          </>
        )
      }

      <div className="container d-flex justify-content-center align-items-center">
        <button className="btn" onClick={handleLoadJobBoard.bind(this, 'prev')}><i className="bi bi-chevron-left"></i></button>
        <p className={`${styles.date} mb-0`}>{formatDateRange(jobStore.date)}</p>
        <button className="btn" onClick={handleLoadJobBoard.bind(this, 'next')}><i className="bi bi-chevron-right"></i></button>
      </div>

      {jobStore.board.map(job => (job && <JobCard key={job.id} job={job} /> ))}
    </Fragment>
  );
}

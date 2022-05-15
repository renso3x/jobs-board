import React from 'react'
import dayjs from 'dayjs'
import styles from './job-card.module.scss'


export function JobCard(props) {
  const { jobStatus } = props
  const cardStatus = jobStatus === 'invited' ? 'cardInvited' : 'cardDefault'

  const startDate = () => dayjs(props.job.startDate).format('ddd D MMM')

  return (
    <div className={`card mb-3 ${styles.jobCard} ${styles[cardStatus]}`}>
      <div className="row g-0">
        <div className={`col-md-4 ${styles.cardDivider}`}>
          <div className="card-body">
            <h2 className={`${styles.cardTitle} ${styles.cardTextDate}`}>{startDate()}</h2>
            <p className={`${styles.cardText} mb-0`}>{props.job.startShift} - {props.job.endShift}</p>
            <p className={`${styles.cardText}`}>
              <small className="text-muted">{props.job.jobName}</small>
            </p>
            <p className={`${styles.cardText}`}>
              <small className="text-muted"><span className={styles.cardRate}>{props.job.hourlyRate}</span> / hr</small>
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h2 className={styles.cardTitle}>{props.job.company.companyName}</h2>
            <p className={`${styles.cardText} mb-0`}>Rating: {props.job.company.rating}</p>
            <p className={`${styles.cardText}`}><small className="text-muted">{props.job.company.streetAddress}</small></p>
            <p className={`${styles.cardText}`}><small className="text-muted">{props.job.company.country}</small></p>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="card-body d-flex flex-row justify-content-end align-items-center">
            {jobStatus === 'invited' && <button className={`btn btn-outline-primary mr-3 ${styles.btnCard} ${styles.btnDecline}`}>DECLINE</button>}

            <button className={`btn btn-primary mr-50 ${styles.btnCard} ${styles.btnApply}`}>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  )
}
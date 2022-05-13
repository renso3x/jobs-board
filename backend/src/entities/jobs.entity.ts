export interface Job {
  id: number
  companyId: number
  jobName: string
  startDate: Date
  startShift: Date
  endShift: Date
  hourlyRate: number
  dateCreated: Date
}
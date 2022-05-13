enum Action {
  Invited,
  Apply
}

interface UserActivity {
  id: number
  userId: number
  jobId: number
  action: Action
  dateApplied: Date
}
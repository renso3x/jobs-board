enum Action {
  Invited,
  Apply
}

interface UserActivity {
  userId: number
  jobId: number
  action: Action
  dateApplied: Date
}
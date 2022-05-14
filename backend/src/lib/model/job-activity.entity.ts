enum Action {
  Invited = "invited",
  Apply = "apply"
}

enum UserType {
  company = "company",
  user = "user"
}

interface UserActivity {
  id: number
  jobId: number
  action: Action
  dateApplied: Date
  type: UserType
}
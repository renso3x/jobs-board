declare enum Action {
    Invited = "invited",
    Apply = "apply"
}
export interface UserBoard {
    id: number;
    jobId: number;
    userId: number;
    action: Action;
    dateApplied: Date;
}
export {};

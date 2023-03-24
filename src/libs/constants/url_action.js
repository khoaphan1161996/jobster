export const BASE_URL = "https://jobify-prod.herokuapp.com/api/v1/toolkit";

export const USER = {
  URL_REGISTER: "/auth/register",
  URL_LOGIN: "/auth/login",
  REGISTER_USER_ACTION: "user/registerUser",
  LOGIN_USER_ACTION: "user/loginUser",
  CLEAR_STORE_USER_ACTION: "user/clearStore",
};

export const JOBS = {
  URL: "/jobs",
  GET_ALL_JOBS_ACTION: "allJobs/getJobs",
  GET_STATS_JOBS_ACTION: "allJobs/showStats",
  CREATE_JOB_ACTION: "job/createJob",
  DELETE_JOB_ACTION: "job/deleteJob",
  EDIT_JOB_ACTION: "job/editJob",
};

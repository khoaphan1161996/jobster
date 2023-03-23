import React from "react";
import { useEffect } from "react";
import Job from "./Job";
import PageBtnContainer from "./PageBtnContainer";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/alljob/allJobSlice";

const JobContainer = () => {
  const { jobs, isLoading, page, totalJobs, numofPages } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job {jobs.length > 1 && "s"}
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>

      {numofPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobContainer;

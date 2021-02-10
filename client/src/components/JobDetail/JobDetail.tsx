import React, { useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { jobs, JobType } from "../../constants/fake-data";

type Props = RouteComponentProps<{ jobId: string }>;

const JobDetail = ({ match }: Props): JSX.Element => {
  const { jobId } = match.params;
  const [state, setstate] = useState<{ job: JobType | undefined }>({
    job: jobs.find((job) => job.id === jobId),
  });
  const { job } = state;

  return job ? (
    <div>
      <h1 className="title">{job.title}</h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>{job.company.name}</Link>
      </h2>
      <div className="box">{job.description}</div>
    </div>
  ) : (
    <p>Job not found</p>
  );
};

export default JobDetail;

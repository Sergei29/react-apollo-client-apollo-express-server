import React from "react";
import { Link } from "react-router-dom";
import { JobType } from "../../constants/fake-data";

type Props = {
  jobs: JobType[];
};

const JobList = ({ jobs }: Props): JSX.Element => {
  const renderJob = (job: JobType) => {
    const title = job.company
      ? `${job.title} at ${job.company.name}`
      : job.title;
    return (
      <li className="media" key={job.id}>
        <div className="media-content">
          <Link to={`/jobs/${job.id}`}>{title}</Link>
        </div>
      </li>
    );
  };

  return <ul className="box">{jobs.map(renderJob)}</ul>;
};

export default JobList;

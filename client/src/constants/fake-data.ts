export type CompanyType = {
  id: string;
  name: string;
  description: string;
};

export const companies = [
  {
    id: "company1",
    name: "Company A",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "company2",
    name: "Company B",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export type JobType = {
  id: string;
  title: string;
  company: CompanyType;
  description: string;
};

export const jobs = [
  {
    id: "job1",
    title: "Job 1",
    company: companies[0],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "job2",
    title: "Job 2",
    company: companies[1],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

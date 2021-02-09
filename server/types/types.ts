export type User = {
  id: string;
  email: string;
  password: string;
  companyId: string;
};

export type Company = {
  id: string;
  name: string;
  description: string;
};

export type Job = {
  id: string;
  companyId: string;
  title: string;
  description: string;
};

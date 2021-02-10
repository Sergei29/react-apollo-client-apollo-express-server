import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { companies, CompanyType } from "../../constants/fake-data";

type StateType = { company: CompanyType | undefined };
type Props = RouteComponentProps<{ companyId: string }>;

const CompanyDetail = ({ match }: Props): JSX.Element => {
  const { companyId } = match.params;

  const [state, setState] = useState<StateType>({
    company: companies.find((company) => company.id === companyId),
  });
  const { company } = state;

  return company ? (
    <div>
      <h1 className="title">{company.name}</h1>
      <div className="box">{company.description}</div>
    </div>
  ) : (
    <p>No company found.</p>
  );
};

export default CompanyDetail;

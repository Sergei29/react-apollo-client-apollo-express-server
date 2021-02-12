import db from "../db";

const resolvers = {
  Query: {
    jobs: () => db.jobs.list(),
  },

  Job: {
    /**
     * @description the Job schema needs to resolve Only one property - `company`
     * @param {Object} root parent object for `company` property in this case it is job object(see: data/jobs.json)
     * @returns {Object} company by ID
     */
    company: (root: Record<string, any>) => db.companies.get(root.companyId),
  },
};

export default resolvers;

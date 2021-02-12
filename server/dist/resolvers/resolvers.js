"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const resolvers = {
    Query: {
        jobs: () => db_1.default.jobs.list(),
    },
    Job: {
        /**
         * @description the Job schema needs to resolve Only one property - `company`
         * @param {Object} root parent object for `company` property in this case it is job object(see: data/jobs.json)
         * @returns {Object} company by ID
         */
        company: (root) => db_1.default.companies.get(root.companyId),
    },
};
exports.default = resolvers;

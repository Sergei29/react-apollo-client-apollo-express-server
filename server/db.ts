import { DataStore } from "notarealdb";
import { User, Job, Company } from "./types/types";

const store = new DataStore("./data");

const db = {
  companies: store.collection<Company>("companies"),
  jobs: store.collection<Job>("jobs"),
  users: store.collection<User>("users"),
};

export default db;

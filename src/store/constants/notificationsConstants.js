// utils
import { generateActions } from "utils/generateActions";

const REGISTER_SERVICE_WORKER = "REGISTER_SERVICE_WORKER";
const SET_USER_SUBSCRIPTION = "SET_USER_SUBSCRIPTION";
const SET_USER_CONSENT = "SET_USER_CONSENT";

const UPDATE_SUBSCRIPTION = generateActions("UPDATE_SUBSCRIPTION");
const FETCH_SUBSCRIPTION_STATUS = generateActions("FETCH_SUBSCRIPTION_STATUS");

export {
  UPDATE_SUBSCRIPTION,
  REGISTER_SERVICE_WORKER,
  SET_USER_SUBSCRIPTION,
  FETCH_SUBSCRIPTION_STATUS,
  SET_USER_CONSENT
};

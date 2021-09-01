import axios from 'axios';
import { EP_JOB_DETAILS, EP_JOB_LIST } from './endpoints';
const baseURL = 'http://dev3.dansmultipro.co.id';
import qs from 'query-string';

const apiBase = async endpoint => {
  return await axios.get(`${baseURL}${endpoint}`);
};

export const getJobList = async filter => {
  return await apiBase(`${EP_JOB_LIST}?${qs.stringify(filter)}`);
};
export const getJobById = async id => {
  return await apiBase(`${EP_JOB_DETAILS}/${id}`);
};

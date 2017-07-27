import { FETCHING_COMPANIES, COMPANIES_RECEIVED, COMPANY_SAVED } from '../actions/CompanyActions';

export const companies = (state = null, action) => {
  switch (action.type) {
    case FETCHING_COMPANIES:
      return Object.assign({}, state, { fetching: true });
    case COMPANIES_RECEIVED:
      return Object.assign({}, state, { fetching: false, list: action.companies });
    case COMPANY_SAVED:
      return Object.assign({}, state, { company: action.company });
    default:
      return state;
  } 
}

export default companies;

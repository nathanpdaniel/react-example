import { CompanyService } from '../services/';

const namespace = 'companies';

export const FETCHING_COMPANIES = `${namespace}/FETCHING_COMPANIES`;
export const COMPANIES_RECEIVED = `${namespace}/COMPANIES_RECEIVED`;

export const COMPANY_SAVED = `${namespace}/COMPANY_SAVED`;

const fetchingCompanies = () => {
  return {
    type: FETCHING_COMPANIES
  }
}

const companiesReceived = (companies) => {
  return {
    type: COMPANIES_RECEIVED,
    companies
  }
}

export const getAllCompanies = () => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(fetchingCompanies());
    return CompanyService.getAll(state.auth.auth).then(companies => dispatch(companiesReceived(companies)));
  }
}

const companySaved = (company) => {
  return {
    type: COMPANY_SAVED,
    company
  }
}

export const saveCompany = (company) => {
  return (dispatch, getState) => {
    const state = getState();
    return CompanyService.save(state.auth.auth, company).then(company => dispatch(companySaved(company)));
  }
}
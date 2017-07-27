export const getAll = (auth) => {
  return auth.fetch('/admin/companies', { method: 'GET' });
}

export const save = (auth, company) => {
  return auth.fetch('/admin/companies', { method: 'POST', body: JSON.stringify(company) })
}

export const getForUser = (auth) => {
  return auth.fetch('/company')
}
import {
  errorAddCompanyAction,
  ERROR_ADD_COMPANY,
  fetchAddCompanyAction,
  FETCH_ADD_COMPANY,
  successAddCompanyAction,
  SUCCESS_ADD_COMPANY,
} from './AddCompanyActions';

describe('AddCompany Actions', () => {
  it('fetch add company', () => {
    const fetch = fetchAddCompanyAction({
      name: 'Test',
      description: 'Test description',
      companyUrl: 'testdomain',
      website: 'http://test.ru',
      address: 'address',
    });
    expect(fetch).toEqual({
      type: FETCH_ADD_COMPANY,
      payload: {
        name: 'Test',
        description: 'Test description',
        companyUrl: 'testdomain',
        website: 'http://test.ru',
        address: 'address',
      },
    });
  });

  it('success add company', () => {
    const fetch = successAddCompanyAction();
    expect(fetch).toEqual({ type: SUCCESS_ADD_COMPANY });
  });

  it('error add company', () => {
    const fetch = errorAddCompanyAction({
      error: 'Test error',
    });
    expect(fetch).toEqual({
      type: ERROR_ADD_COMPANY,
      errorMessage: {
        error: 'Test error',
      },
    });
  });
});

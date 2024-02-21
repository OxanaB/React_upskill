import { StateProps } from '../../interfaces/StateProps';

export const getCompanySelector = (state: any) =>
  state.companyReducer.company?.data;
export const isFollowSelector = (state: StateProps) =>
  state.companyReducer.company?.isFollow;
export const getCompanyStateSelector = (state: StateProps) => {
  const { isFetching, isLoading, isFollowLoad } = state.companyReducer;
  return { isFetching, isLoading, isFollowLoad };
};

export const addCompanyStateSelector = (state: StateProps) =>
  state.addCompanyReducer;

export const companiesStateSelector = (state: StateProps) =>
  state.companiesReducer.companies;

export const companiesStatusSelector = (state: StateProps) => {
  const { isFetching, isLoading } = state.companiesReducer;
  return { isFetching, isLoading };
};

export const companiesVacanciesSelector = (state: StateProps) =>
  state.companyReducer.company?.vacancies;

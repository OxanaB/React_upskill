import { StateProps } from '../../interfaces/StateProps';

export const getVacancySelector = (state: StateProps) =>
  state.vacancyReducer.vacancy?.data;

export const getVacancyStateSelector = (state: StateProps) => {
  const { isFetching, isLoading } = state.vacancyReducer;
  return { isFetching, isLoading };
};

export const addVacancyStateSelector = (state: StateProps) =>
  state.operateVacancyReducer;

export const getVacanciesSelector = (state: StateProps) =>
  state.vacanciesReducer.vacancies;

export const getVacanciesInfoSelector = (state: StateProps) => {
  const { isFetching, isLoading } = state.vacanciesReducer;
  return { isFetching, isLoading };
};

export const getFollowVacanciesSelector = (state: StateProps) =>
  state.followVacanciesReducer.vacancies;

export const getFollowVacanciesInfoSelector = (state: StateProps) => {
  const { isFetching, isLoading } = state.followVacanciesReducer;
  return { isFetching, isLoading };
};

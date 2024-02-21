import { ErrorDto } from '../../dto/ErrorDto';
import { VacanciesStateProps } from '../../interfaces/StateProps';
import {
  GET_FOLLOW_VACANCIES_ERROR,
  GET_FOLLOW_VACANCIES_LOAD,
  GET_FOLLOW_VACANCIES_SUCCESS,
} from '../actions/FollowVacancies';
import { VacanciesAction } from '../actions/VacanciesActions';

export interface VacanciesState {
  vacancies: VacanciesStateProps | null;
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: VacanciesState = {
  vacancies: null,
  isLoading: false,
  isFetching: false,
  errorMessage: null,
};

export const followVacanciesReducer = (
  state = initialState,
  action: VacanciesAction,
): VacanciesState => {
  switch (action.type) {
    case GET_FOLLOW_VACANCIES_LOAD:
      return { ...state, isLoading: true };
    case GET_FOLLOW_VACANCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: null,
        vacancies: action.payload,
      };
    case GET_FOLLOW_VACANCIES_ERROR:
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        errorMessage: action.error,
        vacancies: null,
      };
    default:
      return state;
  }
};

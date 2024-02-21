import { ErrorDto } from '../../dto/ErrorDto';
import { Vacancy } from '../../interfaces/VacancyModel';
import {
  VacancyAction,
  FETCH_VACANCY,
  SET_VACANCY,
  DELETE_VACANCY,
} from '../actions/VacancyActions';

export interface VacancyState {
  vacancy: Vacancy | null;
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: VacancyState = {
  vacancy: null,
  isLoading: false,
  isFetching: false,
  errorMessage: null,
};

export const vacancyReducer = (
  state = initialState,
  action: VacancyAction,
): VacancyState => {
  switch (action.type) {
    case FETCH_VACANCY:
      return { ...state, isLoading: true };
    case SET_VACANCY:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: null,
        vacancy: action.payload,
      };
    case DELETE_VACANCY:
      return initialState;
    default:
      return state;
  }
};

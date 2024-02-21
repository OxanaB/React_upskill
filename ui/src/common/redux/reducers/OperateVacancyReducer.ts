import { ErrorDto } from '../../dto/ErrorDto';
import {
  AddVacancyAction,
  FETCH_ADD_VACANCY,
  SUCCESS_OPERATE_VACANCY,
  ERROR_OPERATE_VACANCY,
  FETCH_DELETE_VACANCY,
} from '../actions/OperateVacancyActions';
import { RESET_VACANCY } from '../actions/VacancyActions';

export interface AddVacancyState {
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: AddVacancyState = {
  isLoading: false,
  isFetching: false,
  errorMessage: null,
};

export const operateVacancyReducer = (
  state = initialState,
  action: AddVacancyAction,
): AddVacancyState => {
  switch (action.type) {
    case FETCH_ADD_VACANCY:
      return { ...state, isLoading: true };
    case SUCCESS_OPERATE_VACANCY:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: null,
      };
    case ERROR_OPERATE_VACANCY:
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        errorMessage: action.errorMessage,
      };
    case FETCH_DELETE_VACANCY:
      return { ...state, isLoading: true };
    case RESET_VACANCY:
      return initialState;
    default:
      return state;
  }
};

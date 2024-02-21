import { ErrorDto } from '../../dto/ErrorDto';
import {
  AddCompanyAction,
  ERROR_ADD_COMPANY,
  FETCH_ADD_COMPANY,
  SUCCESS_ADD_COMPANY,
} from '../actions/AddCompanyActions';

export interface AddCompanyState {
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: AddCompanyState = {
  isLoading: false,
  isFetching: false,
  errorMessage: null,
};

export const addCompanyReducer = (
  state = initialState,
  action: AddCompanyAction,
): AddCompanyState => {
  switch (action.type) {
    case FETCH_ADD_COMPANY:
      return { ...state, isLoading: true };
    case SUCCESS_ADD_COMPANY:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: null,
      };
    case ERROR_ADD_COMPANY:
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};

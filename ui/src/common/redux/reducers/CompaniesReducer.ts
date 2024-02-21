import { ErrorDto } from '../../dto/ErrorDto';
import { CompaniesProps } from '../../interfaces/StateProps';
import {
  CompaniesAction,
  GET_COMPANIES_ERROR,
  GET_COMPANIES_LOAD,
  GET_COMPANIES_SUCCESS,
} from '../actions/CompaniesActions';

export interface CompaniesState {
  companies: CompaniesProps | null;
  isLoading: boolean;
  isFetching: boolean;
  errorMessage: ErrorDto | null;
}

const initialState: CompaniesState = {
  companies: null,
  isLoading: false,
  isFetching: false,
  errorMessage: null,
};

export const companiesReducer = (
  state = initialState,
  action: CompaniesAction,
): CompaniesState => {
  switch (action.type) {
    case GET_COMPANIES_LOAD:
      return { ...state, isLoading: true };
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFetching: true,
        errorMessage: null,
        companies: action.payload,
      };
    case GET_COMPANIES_ERROR:
      return {
        ...state,
        isLoading: false,
        isFetching: false,
        errorMessage: action.error,
        companies: null,
      };
    default:
      return state;
  }
};

import { SearchFormContainer } from "../../../components/SearchForm";

import { getSearchForm } from "../selectors";

const SearchForm = SearchFormContainer(getSearchForm);

export { SearchForm }

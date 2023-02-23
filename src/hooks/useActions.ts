import { useDispatch } from 'react-redux';

import { bindActionCreators } from 'redux';

import { bookmarkActions } from '~/store/bookmark-slice';

const allActions = {
  ...bookmarkActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

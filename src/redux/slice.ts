import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  CaseReducer,
} from '@reduxjs/toolkit';

import { Issue } from '../models/issue';

interface History {
  issueId: Issue['id'];
  highlightTime: Date;
}

interface State {
  issueList: Issue[];
  getIssuesLoading: boolean;
  highlightingIssueId?: Issue['id'];
  highlightHistory: History[];
}

const initialState: State = {
  issueList: [],
  getIssuesLoading: false,
  highlightHistory: [],
};

const fetchIssues = createAsyncThunk('fetchIssues', async (page: number) => {
  const response = await fetch(
    `https://api.github.com/repos/rails/rails/issues?page=${page}&per_page=5`,
  );
  const data = (await response.json()) as Issue[];
  return data;
});

type CR<T> = CaseReducer<State, PayloadAction<T>>;

const highlightIssueCR: CR<Issue['id']> = (state, action) => {
  const issueId = action.payload;

  if (issueId === state.highlightingIssueId) {
    return {
      ...state,
      highlightingIssueId: undefined,
    };
  }

  const historyInstance: History = {
    issueId,
    highlightTime: new Date(),
  };
  const highlightHistory: History[] = [
    historyInstance,
    ...state.highlightHistory.slice(0, 4),
  ];

  return {
    ...state,
    highlightingIssueId: issueId,
    highlightHistory,
  };
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    highlightIssue: highlightIssueCR,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIssues.pending, (state) => ({
      ...state,
      getIssuesLoading: true,
    }));
    builder.addCase(fetchIssues.fulfilled, (state, action) => ({
      ...state,
      issueList: action.payload,
      getIssuesLoading: false,
    }));
    builder.addCase(fetchIssues.rejected, (state) => ({
      ...state,
      getIssuesLoading: false,
    }));
  },
});

const { highlightIssue } = slice.actions;
export { fetchIssues, highlightIssue };

export default slice.reducer;

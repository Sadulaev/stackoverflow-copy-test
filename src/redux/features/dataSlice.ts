import { createSlice, createAsyncThunk, PayloadAction, Action } from '@reduxjs/toolkit'
import { fetchAllQuestions, fetchAllTags, fetchCommentsByQuestion, fetchOneQuestion, fetchQuestionsByParams } from './queries'
import { AppData, Comment, Question, Tags } from './types'

export const initialState: AppData = {
    questions: [],
    currentQuestion: null,
    comments: [],
    allTags: [],
    status: null,
    error: null,
}

const handlePending = (state: AppData) => {
    state.status = 'pending';
    state.error = null;
}

const handleSuccess = (state: AppData, action: PayloadAction<Question[]>) => {
    state.status = 'fulfilled';
    state.questions = action.payload;
}

const handleSuccessOneQuestion = (state: AppData, action: PayloadAction<Question>) => {
    state.status = 'fulfilled';
    state.currentQuestion = action.payload;
}

const handleSuccessComments = (state: AppData, action: PayloadAction<Comment[]>) => {
    state.status = 'fulfilled';
    state.comments = action.payload;
}

const handleSuccessTags = (state: AppData, action: PayloadAction<Tags[]>) => {
    state.status = 'fulfilled';
    state.allTags = action.payload;
}


const dataSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //Get all
        builder.addCase(fetchAllQuestions.pending, handlePending);
        builder.addCase(fetchAllQuestions.fulfilled, handleSuccess);
        //By params
        builder.addCase(fetchQuestionsByParams.pending, handlePending);
        builder.addCase(fetchQuestionsByParams.fulfilled, handleSuccess);
        //Get one
        builder.addCase(fetchOneQuestion.pending, handlePending);
        builder.addCase(fetchOneQuestion.fulfilled, handleSuccessOneQuestion);
        //Get comments
        builder.addCase(fetchCommentsByQuestion.pending, handlePending);
        builder.addCase(fetchCommentsByQuestion.fulfilled, handleSuccessComments);
        //Get all Tags
        builder.addCase(fetchAllTags.pending, handlePending);
        builder.addCase(fetchAllTags.fulfilled, handleSuccessTags);
    }
})

export default dataSlice.reducer;
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Comment, Question, Tags } from "./types";

const API_URL = 'https://api.stackexchange.com'
const requiredParams=`site=stackoverflow&key=${process.env.REACT_APP_STACK_KEY}`

const questionsParams = `${API_URL}/search/advanced?order=desc&sort=activity&filter=withbody&${requiredParams}`

export const fetchQuestionsByParams = createAsyncThunk(
    'data/fetchQuestionsByParams',
    async function (question: string, { rejectWithValue }) {
        const response: Question[] = await axios.get(`${questionsParams}${question ? `&q='${question}'` : ''}`)
        .then(res => {
            return res.data.items;
        }).catch(err => {
            console.log(err)
            if (err.response?.data) {
                return rejectWithValue(err.response.data)
            } else {
                return rejectWithValue({ message: err.message })
            }
        })
        return response;
    }
)

export const fetchAllQuestions = createAsyncThunk(
    'data/fetchAllQuestions',
    async function (_, { rejectWithValue }) {
        const response: Question[] = await axios.get(`${API_URL}/questions?${requiredParams}`)
        .then(res => {
            return res.data.items;
        }).catch(err => {
            console.log(err)
            if (err.response?.data) {
                return rejectWithValue(err.response.data)
            } else {
                return rejectWithValue({ message: err.message })
            }
        })
        return response;
    }
)

export const fetchOneQuestion = createAsyncThunk(
    'data/fetchOneQuestion',
    async function (id: string | undefined, { rejectWithValue }) {
        const response: Question = await axios.get(`${API_URL}/questions/${id}?filter=withbody&${requiredParams}`)
        .then(res => {
            return res.data.items[0];
        }).catch(err => {
            console.log(err)
            if (err.response?.data) {
                return rejectWithValue(err.response.data)
            } else {
                return rejectWithValue({ message: err.message })
            }
        })
        return response;
    }
)

export const fetchCommentsByQuestion = createAsyncThunk(
    'data/fetchCommentsByQuestion',
    async function (id: string | undefined, { rejectWithValue }) {
        const response: Comment[] = await axios.get(`${API_URL}/questions/${id}/comments?filter=withbody&${requiredParams}`)
        .then(res => {
            return res.data.items;
        }).catch(err => {
            console.log(err)
            if (err.response?.data) {
                return rejectWithValue(err.response.data)
            } else {
                return rejectWithValue({ message: err.message })
            }
        })
        return response;
    }
)


export const fetchAllTags = createAsyncThunk(
    'data/fetchAllTags',
    async function (_, { rejectWithValue }) {
        const response: Tags[] = await axios.get(`${API_URL}/tags?${requiredParams}`)
        .then(res => {
            return res.data.items;
        }).catch(err => {
            console.log(err)
            if (err.response?.data) {
                return rejectWithValue(err.response.data)
            } else {
                return rejectWithValue({ message: err.message })
            }
        })
        return response;
    }
)
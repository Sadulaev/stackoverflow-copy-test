import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Question, Tags } from "./types";

const API_URL = 'https://api.stackexchange.com'

const questionsParams = `${API_URL}/search/advanced?key=${process.env.REACT_APP_STACK_KEY}&order=desc&sort=activity&filter=withbody&site=stackoverflow`

export const fetchQuestionsByParams = createAsyncThunk(
    'data/fetchQuestionsByParams',
    async function (question: string, { rejectWithValue }) {
        console.log(question)
        const response: Question[] = await axios.get(`${questionsParams}${question ? `&q=${question}` : ''}`)
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
        const response: Question[] = await axios.get(`${API_URL}/questions?key=${process.env.REACT_APP_STACK_KEY}&site=stackoverflow`)
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
        const response: Tags[] = await axios.get(`${API_URL}/tags?key=${process.env.REACT_APP_STACK_KEY}&site=stackoverflow`)
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
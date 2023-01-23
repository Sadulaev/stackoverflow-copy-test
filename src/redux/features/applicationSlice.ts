import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ApplicationState = {
    search: string;
}

const initialState: ApplicationState = {
    search: ''
}

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        changeSearchText(state, action: PayloadAction<string>) {
            state.search = action.payload; 
        }
    },
})

export const {changeSearchText} = applicationSlice.actions;

export default applicationSlice.reducer;
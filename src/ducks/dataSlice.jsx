import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        isLoading: false,
        isError: false,
        items: [],
    },
    reducers: {
        setDataLoading: (state) => {
            state.isError = false;
            state.isLoading = true;
        },
        setDataSuccess: (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.items = action.payload;
        },
        setDataError: (state) => {
            state.isError = true;
            state.isLoading = false;
        },
    },
});

const { setDataSuccess, setDataLoading, setDataError } = dataSlice.actions;

export const retrieveData = () => (dispatch) => {
    dispatch(setDataLoading());
    fetch('http://localhost:3001/data')
    .then(response => response.json())
    .then(payload => {
      const retrievedData = Object.values(payload);
      dispatch(setDataSuccess(retrievedData));
    }).catch(() => dispatch(setDataError()));
};

window.dataSlice = dataSlice;

export default dataSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const creatData = createAsyncThunk(
    async({values}) => {
        console.log("ENTROU")
        return fetch(`http://localhost:3001/data`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                id: values.id,
                value: values.value,
                monthyPrice: values.monthyPrice,
                monthySetupPrice: values.monthySetupPrice,
                currency: "R$",
            }),
        }).then((res) => res.json());
    }
);

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
        [creatData.pending]: (state, action) => {
            state.isError = false;
            state.isLoading = true;
        },
        [creatData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.item = action.payload;
        },
        [creatData.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
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
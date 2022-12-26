import { createSlice } from "@reduxjs/toolkit";

// this is read only
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks - middleware to use async call (API)
export function fetchProducts() {
    return async function fetchProductsThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => { 
                dispatch(setProducts(data));
                dispatch(setStatus(STATUSES.IDLE));
            });
        }
        catch(err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}
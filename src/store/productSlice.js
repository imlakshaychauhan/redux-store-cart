import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


// Thunks - middleware to use async call (API)
export const fetchProducts = createAsyncThunk('product/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    return data;
})

// this is the old way to use thunks (more intuitive).
// export function fetchProducts() {
//     return async function fetchProductsThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res = await fetch('https://fakestoreapi.com/products')
//             .then((response) => response.json())
//             .then((data) => { 
//                 dispatch(setProducts(data));
//                 dispatch(setStatus(STATUSES.IDLE));
//             });
//         }
//         catch(err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }
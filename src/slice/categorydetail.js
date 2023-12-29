import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async (e) => {
    try {
        const response = await fetch('https://emojihub.yurace.pro/api/category/', e);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
        }
        const data = await response.json();
        const uniqueCategoriesSet = new Set(data.map(obj => obj.category));
        const uniqueCategories = Array.from(uniqueCategoriesSet);
        return uniqueCategories;
    } catch (error) {
        throw error;
    }
});

const categorydetail = createSlice({
    name: 'data',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default categorydetail.reducer; // Export the reducer only

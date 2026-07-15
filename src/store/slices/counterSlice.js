import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        userName: "sweera",
        isLoadding: false
    },
    reducers: {
        increment: (state) => {
            state.count += 1;

        }
    }
})
export default counterSlice.reducer
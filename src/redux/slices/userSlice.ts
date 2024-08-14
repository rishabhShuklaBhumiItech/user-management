import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface UserState {
    id: number | null;
    userData: UserData | null;
}

const initialState: UserState = {
    id: null,
    userData: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setId: (state, action: PayloadAction<number>) => {
            state.id = action.payload;
        },
        setUserData: (state, action: PayloadAction<UserData>) => {
            state.userData = action.payload;
        },
        resetState: (state) => {
            state.id = null;
            state.userData = null;
        },
    },
});

export const { setId, setUserData, resetState } = userSlice.actions;
export default userSlice.reducer;

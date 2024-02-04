import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { BASE_URL } from "../../utils/constants"



export const createUser = createAsyncThunk(
    'users/createUser', 
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/users`, payload)
            return res.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const loginUser = createAsyncThunk(
    'users/loginUser', 
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, payload)
            const login = await axios(`${BASE_URL}/auth/profile`, {
                headers: {
                    "Authorization": `Bearer ${res.data.access_token}`
                }
            })
            return login.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser', 
    async (payload, thunkAPI) => {
        try {
            const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload)
            return res.data
        } catch (error) {
            console.log(error)
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const addCurrenUser = (state, action) => {
    state.currentUser = action.payload
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        cart: [],
        isLoading: false,
        formType: 'signup',
        showform: false
    },
    reducers: {
        addItemToCart: (state, action) => {
            let newCart = [...state.cart]
            const found = state.cart.find(({ id }) => id === action.payload.id)
            if(found) {
                newCart = newCart.map((item) => {
                    return item.id === action.payload.id
                    ? {...item, quantity: action.payload.quantity || item.quantity + 1}
                    : item
                })
            } else newCart.push({ ...action.payload, quantity: 1})
            state.cart = newCart
        },
        toggleForm: (state, { payload }) => {
            state.showform = payload
        },
        toggleFormType: (state, { payload }) => {
            state.formType = payload
        },
    },
    extraReducers: (builder) => {
    //     builder.addCase(getCategories.pending, (state) => {
    //         state.isLoading = true
    //     });
        builder.addCase(createUser.fulfilled, addCurrenUser)
        builder.addCase(loginUser.fulfilled, addCurrenUser)
        builder.addCase(updateUser.fulfilled, addCurrenUser)
    }
})

export const { addItemToCart, toggleForm, toggleFormType } = userSlice.actions

export default userSlice.reducer

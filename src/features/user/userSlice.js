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
        }
    },
    extraReducers: (builder) => {
    //     builder.addCase(getCategories.pending, (state) => {
    //         state.isLoading = true
    //     });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
        });
    //     builder.addCase(getCategories.rejected, (state) => {
    //         state.isLoading = false
    //     })
    }
})

export const { addItemToCart, toggleForm } = userSlice.actions

export default userSlice.reducer
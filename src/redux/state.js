import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  all_posts: null,
  friends : null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token" , action.payload.token);
    },
    setLogout: (state) => {
      return initialState;
    },
    setFriends: (state, action) => {
      if (state.user === null) {
        console.log("User's friends not exist :(");
      } else {
        state.friends = action.payload;
      }
    },
    setPosts: (state, action) => {
      if (state.user === null) {
        console.log("User's Posts not exist :(");
      } else {
        state.all_posts = action.payload;
      }
    },
  },
});


export const {setFriends , setLogin , setLogout , setMode, setPosts} = authSlice.actions ;
export default authSlice.reducer;
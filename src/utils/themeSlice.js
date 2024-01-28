import { createSlice, current } from "@reduxjs/toolkit";
const themeSlice = createSlice({
  name: "themeSlice",
  initialState: { lightTheme: true },
  reducers: {
    toggleTheme: (state) => {
      state.lightTheme = !state.lightTheme;
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;



/*  when not wrapped inside {}
import {createSlice,current} from "@reduxjs/toolkit";
const themeSlice = createSlice({
    name:"themeSlice" ,
    initialState:true,
    reducers:{  
        toggleTheme: (state) => {
            // Return the new state instead of mutating the existing one
            return !state;
          }

        },
        
        
    }
)
export const {toggleTheme}= themeSlice.actions;   
export default themeSlice.reducer;

*/

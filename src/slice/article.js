import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading:false,
    articles:[],
    error:null
}

export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers:{
        getArticlesStart:state=>{
            state.isLoading = true
        },
        getArticleSuccess:(state, action)=>{
            state.isLoading= false
            state.articles = action.payload
        },
        getArticleFailure:(state, action)=>{
            state.error= action.payload
        }
    },
})

export const {getArticlesStart, getArticleSuccess,getArticleFailure} = ArticleSlice.actions
export default ArticleSlice.reducer
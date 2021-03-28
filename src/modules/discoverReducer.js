import { createSlice } from '@reduxjs/toolkit';
import { getNewReleases, getAllCategories, getFeaturePlayList } from "./discoverAction";

export const discoverSlide = createSlice({
  name: "discover",
  initialState: {
    newReleases: {
      data: [],
      loading: false,
      loaded: false,
      error: ''
    },
    playlists: {
      data: [],
      loading: false,
      loaded: false,
      error: ''
    },
    categories: {
      data: [],
      loading: false,
      loaded: false,
      error: ''
    },
  },
  extraReducers: {
    [getNewReleases.pending]: (state, action) => {
      state.newReleases = {
        loaded: false,
        loading: true,
        data: [],
        error: [],
      }
    },
    [getNewReleases.fulfilled]: (state, action) => {
      state.newReleases = {
        loaded: true,
        loading: false,
        data: action.payload,
      }
    },
    [getNewReleases.rejected]: (state, action) => {
      state.newReleases = {
        loaded: true,
        loading: false,
        data: [],
        error: action.error
      }
    },
    [getFeaturePlayList.pending]: (state, action) => {
      state.playlists = {
        loaded: false,
        loading: true,
        data: [],
        error: [],
      }
    },
    [getFeaturePlayList.fulfilled]: (state, action) => {
      state.playlists = {
        loaded: true,
        loading: false,
        data: action.payload,
      }
    },
    [getFeaturePlayList.rejected]: (state, action) => {
      state.playlists = {
        loaded: true,
        loading: false,
        data: [],
        error: action.error
      }
    },
    [getAllCategories.pending]: (state, action) => {
      state.categories = {
        loaded: false,
        loading: true,
        data: [],
        error: [],
      }
    },
    [getAllCategories.fulfilled]: (state, action) => {
      state.categories = {
        loaded: true,
        loading: false,
        data: action.payload,
      }
    },
    [getAllCategories.rejected]: (state, action) => {
      state.categories = {
        loaded: true,
        loading: false,
        data: [],
        error: action.error
      }
    },
  }
})

export default discoverSlide.reducer

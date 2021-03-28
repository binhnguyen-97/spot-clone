import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchNewReleases, fetchFeaturedPlaylist, fetchAllCategories } from "helpers/clients/browserClient";

export const getNewReleases = createAsyncThunk("discover/GET_NEW_RELEASE", async (accessToken, thunkApi) => {
  const data = await fetchNewReleases(accessToken)
  return data
})


export const getFeaturePlayList = createAsyncThunk("discover/GET_FEATURE_PLAYLIST", async (accessToken, thunkApi) => {
  const data = await fetchFeaturedPlaylist(accessToken)
  return data
})


export const getAllCategories = createAsyncThunk("discover/GET_ALL_CATEGORIES", async (accessToken, thunkApi) => {
  const data = await fetchAllCategories(accessToken)
  return data
})


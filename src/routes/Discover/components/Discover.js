import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewReleases, getAllCategories, getFeaturePlayList } from 'modules/discoverAction'
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import getAccessToken from "helpers/clients/authClient";
import '../styles/_discover.scss';

const Discover = () => {
  const disPatch = useDispatch();
  const newReleases = useSelector(state => state.discover.newReleases)
  const playlists = useSelector(state => state.discover.playlists)
  const categories = useSelector(state => state.discover.categories)

  useEffect(() => {
    const initData = async () => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        disPatch(getNewReleases(accessToken))
        disPatch(getAllCategories(accessToken))
        disPatch(getFeaturePlayList(accessToken))
      }
    }
    initData()
  }, [disPatch])

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases.data} isLoading={newReleases.loading} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists.data} isLoading={playlists.loading} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories.data} imagesKey="icons" isLoading={categories.loading} />
    </div>
  );
}

export default Discover;



  // async componentDidMount() {
  //   const accessToken = await getAccessToken();

  //   let newRelease = [];
  //   let featuredPlaylist = [];
  //   let allCategories = [];
  //   if (accessToken) {
  //     [{ value: newRelease }, { value: featuredPlaylist }, { value: allCategories }] = await Promise.allSettled([
  //       fetchNewReleases(accessToken),
  //       fetchFeaturedPlaylist(accessToken),
  //       fetchAllCategories(accessToken)
  //     ])
  //   };

  //   this.setState((prevState) => {
  //     let newState = { ...prevState };
  //     if (Array.isArray(newRelease) && newRelease.length > 0) {
  //       newState = {
  //         ...newState,
  //         newReleases: newRelease
  //       }
  //     }
  //     if (Array.isArray(featuredPlaylist) && featuredPlaylist.length > 0) {
  //       newState = {
  //         ...newState,
  //         playlists: featuredPlaylist
  //       }
  //     }
  //     if (Array.isArray(allCategories) && allCategories.length > 0) {
  //       newState = {
  //         ...newState,
  //         categories: allCategories
  //       }
  //     }
  //     return newState
  //   })
  // }

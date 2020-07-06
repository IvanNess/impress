import {
    getFilteredVideosWithStartVideoIdx,
    videos
} from '../utils'

const updateFilteredVideos = (state, {type, payload})=>{
    if(state===undefined){
        return getFilteredVideosWithStartVideoIdx(videos, 6, 0).filteredVideos
    }

    switch(type){
        case 'LOAD_MORE_VIDEOS':

            const videos = state.filteringVideoType === 'all' ? state.videos : state.videos.filter(video => video.type.includes(state.filteringVideoType))

            return getFilteredVideosWithStartVideoIdx(videos, state.panelVideosQuantity, state.startVideoIndex).filteredVideos

        case 'SET_FILTERING_VIDEOTYPE':

            const allFilteredVideos = payload === 'all' ? state.videos : state.videos.filter(video => video.type.includes(payload))

            return getFilteredVideosWithStartVideoIdx(allFilteredVideos, state.panelVideosQuantity, 0).filteredVideos

        default: 
            return state.filteredVideos
    }
}

export default updateFilteredVideos
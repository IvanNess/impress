const videos = [
    {
        id: '0',
        type: ['explainer', 'advideo'],
        stringCode: 'kitty'
    },
    {
        id: '1',
        type: ['learning', 'advideo'],
        stringCode: 'consult'
    },
    {
        id: '2',
        type: ['explainer', 'learnig'],
        stringCode: 'law'
    },
    {
        id: '3',
        type: ['advideo'],
        stringCode: 'island'
    },
    {
        id: '4',
        type: ['learning', 'advideo'],
        stringCode: 'beard'
    },
    {
        id: '5',
        type: ['explainer', 'advideo'],
        stringCode: 'pour'
    },
    {
        id: '6',
        type: ['explainer', 'advideo'],
        stringCode: 'kitty1'
    },
    {
        id: '7',
        type: ['learning', 'advideo'],
        stringCode: 'consult1'
    },
    {
        id: '8',
        type: ['explainer', 'learnig'],
        stringCode: 'law1'
    },
    {
        id: '9',
        type: ['advideo'],
        stringCode: 'island1'
    },
    {
        id: '10',
        type: ['learning', 'advideo'],
        stringCode: 'beard1'
    },
    // {
    //     id: '11',
    //     type: ['explainer', 'advideo'],
    //     stringCode: 'pour1'
    // }
]

const getFilteredVideosWithStartVideoIdx = (videos, panelVideosQuantity, startVideoIndex) => {

    let filteredVideos = []
    let newStartVideoIndex = startVideoIndex
    let currentVideo = videos[startVideoIndex]

    if (videos.length < panelVideosQuantity) {
        for (let index = 0; index < panelVideosQuantity; index++) {
            currentVideo = videos[newStartVideoIndex]
            filteredVideos.push(currentVideo)
            newStartVideoIndex = newStartVideoIndex+1
        }
    } else {
        for (let index = 0; index < panelVideosQuantity; index++) {
            currentVideo = videos[newStartVideoIndex]
            filteredVideos.push(currentVideo)
            newStartVideoIndex = videos[newStartVideoIndex + 1] ? newStartVideoIndex + 1 : 0
        }
    }

    return { filteredVideos, startVideoIndex: newStartVideoIndex }
}

const init = {
    showPanelItems: false,
    filteringVideoType: 'all',
    panelVideosQuantity: 6,
    startVideoIndex: 6,
    filteredVideos: getFilteredVideosWithStartVideoIdx(videos, 6, 0).filteredVideos,
    videos
}

const reducer = (state = init, { type, payload }) => {

    console.log(type, payload, state)

    switch (type) {
        case 'SET_SHOW_PANEL_ITEMS':
            return {
                ...state,
                showPanelItems: payload
            }

        case 'LOAD_MORE_VIDEOS':

            const videos = state.filteringVideoType === 'all' ? state.videos : state.videos.filter(video => video.type.includes(state.filteringVideoType))

            return {
                ...state,
                startVideoIndex: getFilteredVideosWithStartVideoIdx(videos, state.panelVideosQuantity, state.startVideoIndex).startVideoIndex,
                filteredVideos: getFilteredVideosWithStartVideoIdx(videos, state.panelVideosQuantity, state.startVideoIndex).filteredVideos,
            }

        case 'SET_FILTERING_VIDEOTYPE':

            const allFilteredVideos = payload === 'all' ? state.videos : state.videos.filter(video => video.type.includes(payload))

            return {
                ...state,
                startVideoIndex: getFilteredVideosWithStartVideoIdx(allFilteredVideos, state.panelVideosQuantity, 0).startVideoIndex,
                filteredVideos: getFilteredVideosWithStartVideoIdx(allFilteredVideos, state.panelVideosQuantity, 0).filteredVideos,
                filteringVideoType: payload
            }
        default:
            return state
    }
}

export default reducer
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

export {
    videos,
    getFilteredVideosWithStartVideoIdx
}
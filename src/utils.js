import * as Fingerprint2 from 'fingerprintjs2'

const videos = [
    {
        id: '0',
        type: ['explainer', 'advideo'],
        stringCode: 'kitty',
        src: 'https://www.youtube.com/embed/eVzVDzfDLjc?rel=0&autoplay=1'
    },
    {
        id: '1',
        type: ['learning', 'advideo'],
        stringCode: 'consult',
        src: "https://www.youtube.com/embed/x3WqrV4D07M?rel=0&autoplay=1"
    },
    {
        id: '2',
        type: ['explainer', 'learnig'],
        stringCode: 'law',
        src: 'https://www.youtube.com/embed/YaBS444DuGo?rel=0&autoplay=1'
    },
    {
        id: '3',
        type: ['advideo'],
        stringCode: 'island',
        src: "https://www.youtube.com/embed/2tF-BIUEKtw?rel=0&autoplay=1"
    },
    {
        id: '4',
        type: ['learning', 'advideo'],
        stringCode: 'beard',
        src: "https://www.youtube.com/embed/2tF-BIUEKtw?rel=0&autoplay=1"
    },
    {
        id: '5',
        type: ['explainer', 'advideo'],
        stringCode: 'pour',
        src: 'https://www.youtube.com/embed/1mc7tQBOx3Y?rel=0&autoplay=1'
    },
    {
        id: '6',
        type: ['explainer', 'advideo'],
        stringCode: 'kitty1',
        src: 'https://www.youtube.com/embed/eVzVDzfDLjc?rel=0&autoplay=1'
    },
    {
        id: '7',
        type: ['learning', 'advideo'],
        stringCode: 'consult1',
        src: "https://www.youtube.com/embed/x3WqrV4D07M?rel=0&autoplay=1"
    },
    {
        id: '8',
        type: ['explainer', 'learnig'],
        stringCode: 'law1',
        src: 'https://www.youtube.com/embed/YaBS444DuGo?rel=0&autoplay=1'
    },
    {
        id: '9',
        type: ['advideo'],
        stringCode: 'island1',
        src: "https://www.youtube.com/embed/2tF-BIUEKtw?rel=0&autoplay=1"
    },
    {
        id: '10',
        type: ['learning', 'advideo'],
        stringCode: 'beard1',
        src: "https://www.youtube.com/embed/2tF-BIUEKtw?rel=0&autoplay=1"
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

function getFingerprint () {
    console.log('getFingerprint')
    return new Promise((resolve, reject) => {
      async function getHash () {
        const options = {
          excludes: {
            plugins: true,
            localStorage: true,
            adBlock: true,
            screenResolution: true,
            availableScreenResolution: true,
            enumerateDevices: true,
            pixelRatio: true,
            doNotTrack: true
          }
        }
  
        try {
          const components = await Fingerprint2.getPromise(options)
          const values = components.map(component => component.value)
          console.log('fingerprint hash components', components)
  
          return String(Fingerprint2.x64hash128(values.join(''), 31))
        } catch (e) {
          reject(e)
        }
      }
  
      if (window.requestIdleCallback) {
        console.log('get fp hash @ requestIdleCallback')
        requestIdleCallback(async () => resolve(await getHash()))
      } else {
        console.log('get fp hash @ setTimeout')
        setTimeout(async () => resolve(await getHash()), 500)
      }
    })
  }
  
export {
    videos,
    getFilteredVideosWithStartVideoIdx,
    getFingerprint
}
import * as Fingerprint2 from 'fingerprintjs2'

const videos = [
    {
        id: '0',
        type: ['explainer'], //available types: ['explainer', 'advideo', 'learning']
        stringCode: 'dresa',
        src: 'https://www.youtube.com/embed/vvm270YBce4?autoplay=1'
    },
    {
        id: '1',
        type: ['explainer'],
        stringCode: 'neosound',
        src: 'https://www.youtube.com/embed/dM8AisYTG8Y?autoplay=1'
    },
    {
        id: '2',
        type: ['explainer'],
        stringCode: 'stildi',
        src: 'https://www.youtube.com/embed/eVzVDzfDLjc?autoplay=1'
    },
    {
        id: '3',
        type: ['explainer'],
        stringCode: 'skilterra',
        src: 'https://www.youtube.com/embed/eVzVDzfDLjc?autoplay=1'
    },
    {
        id: '4',
        type: [],
        stringCode: 'magerwox',
        src: 'https://www.youtube.com/embed/eVzVDzfDLjc?autoplay=1'
    },
    {
        id: '5',
        type: [],
        stringCode: 'island',
        src: 'https://www.youtube.com/embed/2tF-BIUEKtw?autoplay=1'
    },
    {
        id: '6',
        type: ['explainer'],
        stringCode: 'woxy',
        src: 'https://www.youtube.com/embed/2tF-BIUEKtw?autoplay=1'
    },
    {
        id: '7',
        type: [],
        stringCode: 'newyear',
        src: 'https://www.youtube.com/embed/2tF-BIUEKtw?autoplay=1'
    },
    {
        id: '8',
        type: ['explainer'],
        stringCode: 'legalmap',
        src: 'https://www.youtube.com/embed/YaBS444DuGo?autoplay=1'
    },
    {
        id: '9',
        type: [],
        stringCode: 'island2',
        src: 'https://www.youtube.com/embed/YaBS444DuGo?autoplay=1'
    },
    {
        id: '10',
        type: [],
        stringCode: 'bank',
        src: 'https://www.youtube.com/embed/YaBS444DuGo?autoplay=1'
    },
    {
        id: '11',
        type: [],
        stringCode: 'pour',
        src: 'https://www.youtube.com/embed/1mc7tQBOx3Y?autoplay=1'
    }
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

    if (videos.length === panelVideosQuantity) {
        filteredVideos.push(null)
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

const isInTheView = ref =>{
    if (ref.current && document.documentElement.clientHeight > ref.current.getBoundingClientRect().y) 
        return true
    return false
}
  
export {
    videos,
    getFilteredVideosWithStartVideoIdx,
    getFingerprint,
    isInTheView
}
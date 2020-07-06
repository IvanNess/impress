import * as Fingerprint2 from 'fingerprintjs2'

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
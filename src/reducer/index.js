import updateStartVideoIndex from './updateStartVideoIndex'
import updateFilteringVideoType from './updateFilteringVideoType'
import updateShowPanelItems from './updateShowPanelItems'
import updateFilteredVideos from './updateFilteredVideos'
import updateFingerPrint from './updateFingerPrint'

import updateClicked from '../calc-app/reducer/updateClicked'
import updateServiceTypes from '../calc-app/reducer/updateServiceTypes'
import updateConnectTypes from '../calc-app/reducer/updateConnectTypes'
import updatePrevAux from '../calc-app/reducer/updatePrevAux'
import updateModalWindow from '../calc-app/reducer/updateModalWindow'
import updateFetch from '../calc-app/reducer/updateFetch'
import updatePrevLanguage from '../calc-app/reducer/updatePrevLanguage'
import updateWannaTypes from '../calc-app/reducer/updateWannaTypes'
import updateAuxTypes from '../calc-app/reducer/updateAuxTypes'
import updateLanguageTypes from '../calc-app/reducer/updateLanguageTypes'
import updateShowApp from '../calc-app/reducer/updateShowApp'

import {videos} from '../utils'

const init ={
    calc:{
        budgetTypes: [
            {
                name: 'Хочу узнать стандартную стоимость',
                stringCode: 'standart'
            },
            {
                name: 'Нужен самый бюджетный вариант',
                stringCode: 'budget'
            },
            {
                name: 'Нужен ролик самого высокого качества',
                stringCode: 'high'
            },
            {
                name: 'У меня горящие сроки',
                stringCode: 'time'
            },            
        ],
    }
}

const reducer = (state, action) => {

    return {
        panelVideosQuantity: 6,
        videos,    
        startVideoIndex: updateStartVideoIndex(state, action),
        filteringVideoType: updateFilteringVideoType(state, action),
        showPanelItems: updateShowPanelItems(state, action),
        filteredVideos: updateFilteredVideos(state, action),
        fingerPrint: updateFingerPrint(state, action),
        calc: {
            showApp: updateShowApp(state, action),
            wannaTypes: updateWannaTypes(state, action),
            languageTypes: updateLanguageTypes(state, action),
            auxTypes: updateAuxTypes(state, action),
            budgetTypes: init.calc.budgetTypes,
            serviceTypes: [...updateServiceTypes(state, action)], 
            connectTypes: [...updateConnectTypes(state, action)],
            clicked: {...updateClicked(state, action)},
            prevAuxType: updatePrevAux(state, action),
            prevLanguageType: updatePrevLanguage(state, action),
            modalWindow: {...updateModalWindow(state, action)},
            fetch: {...updateFetch(state, action)}
        }
    }
}

export default reducer
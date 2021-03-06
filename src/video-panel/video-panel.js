import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import VideoTile from './video-tile'
import VideoTypes from './video-types'

import './video-panel.scss'

const VideoPanel = ({ videos, loadMore, filteringVideoType }) => {

    console.log('videos', videos)

    return (
        <div className={`video-panel`} id={`examples`}>
            <VideoTypes />
            <div className={`video-tiles`}>
                {videos.map((video, idx) => {
                    return (
                        <React.Fragment>
                            {video && <VideoTile
                                key={idx}
                                stringCode={video ? video.stringCode : 'none'}
                                type={video && video.type}
                                filteringVideoType={filteringVideoType}
                                src={video && video.src}
                            />}
                        </React.Fragment>
                    )
                })}
            </div>
            <div className='load-wrapper'>
                {!videos.includes(null) && <div
                    className={`load ${videos.includes(undefined) && 'none'}`}
                    onClick={() => loadMore()}
                >
                    Еще видео >
                </div>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    videos: state.filteredVideos,
    filteringVideoType: state.filteringVideoType
})

const mapDispatchToProps = ({
    loadMore: () => ({ type: 'LOAD_MORE_VIDEOS' })
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoPanel)
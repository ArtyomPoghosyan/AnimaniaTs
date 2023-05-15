import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import 'react-slideshow-image/dist/styles.css';

import { mainVideoThunk } from '../../slices/media/main-video';

import { useAppDispatch, } from '../../hooks';
import { IState } from '../../models/common/common';

import { Url } from '../../services/base-url';

import ReactPlayer from 'react-player';

export const CarouselSlider: React.FC = () => {

    const { videoData } = useSelector((state: IState) => state.mainVideo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(mainVideoThunk())
    }, [])

    return (
        <div>
            <div id="main_video" className="each-slide" >
                <ReactPlayer
                    muted={true}
                    playing
                    url={Url + `/${videoData?.data?.path}`}
                    width="640"
                    height="360"
                    controls={false}
                />
            </div>
        </div >
    )


}



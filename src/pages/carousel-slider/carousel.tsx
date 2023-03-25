import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import 'react-slideshow-image/dist/styles.css';
import { useAppDispatch, } from '../../hooks';
import { IState } from '../../models/common/common';
import { IVideo } from '../../models/media/media';
import { Url } from '../../services/base-url';
import { mainVideoThunk } from '../../slices/media/main-video/main-video';

import carouselStyle from "../carousel-slider/carousel-style.module.css";
import ReactPlayer from 'react-player';

export const CarouselSlider: React.FC = () => {

    const { videoData } = useSelector((state: IState) => state.mainVideo);
    const dispatch = useAppDispatch();

    const [videoItem, setVideoItem] = useState<any>()
    useEffect(() => {
        dispatch(mainVideoThunk())
    }, [])

    useEffect(() => {
        if (videoData?.data) {
            setVideoItem(videoData?.data[0])
        }
    }, [videoData.length])


    return (
        <div>
            <div id="main_video" className="each-slide" >
                <ReactPlayer
                    muted={true}
                    playing
                    url={Url + `/${videoItem?.path}`}
                    width="640"
                    height="360"
                    controls={false}
                />
            </div>
        </div >
    )


}



import { useEffect } from 'react';
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

    const { userData } = useSelector((state: IState) => state.mainVideo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(mainVideoThunk())
    }, [])

    return (
        <div>
            {userData?.data?.map((videoId: IVideo, index: number) => (
                console.log(videoId),
                <div id="main_video" className="each-slide" key={index}>
                    <ReactPlayer
                        muted={true}
                        playing
                        url={Url + `/${videoId.path}`}
                        width="640"
                        height="360"
                        controls={false}
                    />
                </div>
            ))
            }
        </div >
    )


}



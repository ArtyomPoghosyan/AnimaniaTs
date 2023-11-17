import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import 'react-slideshow-image/dist/styles.css';

import { useAppDispatch, } from '../../hooks';
import { IState } from '../../models/common/common';

import { Url } from '../../helpers/url/base-url';

import ReactPlayer from 'react-player';
import { mainVideoThunk } from '../../store';

export const CarouselSlider: React.FC = () => {
    const { data }  = useSelector((state: IState) => state.media) ;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(mainVideoThunk())
    }, [])

    return (
        <div>
            <div id="main_video" >
                <ReactPlayer
                    muted={true}
                    playing
                    url={`${Url}/${data?.data?.path}`}
                    width="640"
                    height="360"
                    controls={false}
                />
            </div>
        </div >
    )


}



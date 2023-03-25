import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import projectStyle from "../projects/project-style.module.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { useSelector } from 'react-redux';
import { IState } from '../../models/common/common';
import { useAppDispatch } from '../../hooks';
import { mainVideoThunk } from '../../slices/media/main-video/main-video';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.css"
import { IVideo } from '../../models/media/media';
import { Url } from '../../services/base-url';
// import pic1 from "../../assets/images/RIVER.jpg";
// import pic2 from "../../assets/images/staff.jpg";
// import pic3 from "../../assets/images/mountain.jpg";
// import pic4 from "../../assets/images/forest.jpg";

// const initialProjectPictures = [
//     { id: 1, image: pic1 },
//     { id: 2, image: pic2 },
//     { id: 3, image: pic3 },
//     { id: 4, image: pic4 }

// ]

export const Projects: React.FC = () => {

    const { videoData } = useSelector((state: IState) => state.mainVideo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(mainVideoThunk())
    }, [])

    console.log(videoData)
    return (
        <div id="project">
            <h1 className="heading" style={{ color: "#FFD400" }}>Our Projects</h1>
            <Carousel>
                {videoData?.data?.map((videoId: IVideo, index: number) => (
                    <Carousel.Item key={index} id="main_video" className="each-slide">
                        <ReactPlayer
                            muted={true}
                            playing
                            url={Url + `/${videoId.path}`}
                            width="400"
                            height="200"
                            controls={false}
                        />

                    </Carousel.Item>
                    // <div id="main_video" className="each-slide" key={index}>
                    //     <ReactPlayer
                    //         muted={true}
                    //         playing
                    //         url={Url + `/${videoId.path}`}
                    //         width="640"
                    //         height="360"
                    //         controls={false}
                    //     />
                    // </div>
                ))
                }
            </Carousel>
        </div>
    )
}
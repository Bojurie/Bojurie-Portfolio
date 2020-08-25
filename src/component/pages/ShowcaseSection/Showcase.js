import React, {Component} from 'react';
import './Showcase.css';
import Video from '../../../component/video/video.mp4'

class Showcase extends Component {
    render () {
        return (
        <>
            <video id="background-video" loop autoPlay>
                <source playsInline src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            < div className = 'showcase-container' >
            <h1>Full Stack Web Developer</h1>
            <p>Portfolio Gallery</p>
            </div>
        </>
        )
    }
};

export default Showcase;
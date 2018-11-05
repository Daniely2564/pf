import React from 'react';
import Slider from 'react-slick';

const ProjectTemplate = ({ Item, render }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div style={{ width: '100%', paddingBottom: '1300px' }}>
            <div style={{ width: '100%', padding: '80px', height: '650px' }}>
                <div className="image-slider-container" >
                    <Slider {...settings}>
                        {Item.sliders.map(slider => {
                            return slider;
                        })}
                    </Slider>
                </div>
                <div className="project-description" style={{ marginTop: '100px' }}>
                    <h1 className="project-intro">Skills</h1>

                    <ul>
                        {Item.skills.map(skill => {
                            return <li>{skill}</li>
                        })}
                    </ul>
                    <h2 style={{ textAlign: 'center' }}>{Item.h2.title} - <a target="_blank" href={Item.h2.link}>{Item.h2.link}</a></h2>

                    {Item.p}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ padding: '10px 30px', fontSize: '150%', marginTop: '50px' }} className="ui button" onClick={() => render('intro')}>
                        Go Back
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate;
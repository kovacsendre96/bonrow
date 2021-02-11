
import React, { useEffect, useState } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import {Tags,Container,MainConatiner} from '../styles/gallerStyles';
import gintonic_1 from '../images/Gin Tonic album/gintonic_1.jpg';
import gintonic_2 from '../images/Gin Tonic album/gintonic_2.jpg';
import gintonic_3 from '../images/Gin Tonic album/gintonic_3.jpg';
import gintonic_4 from '../images/Gin Tonic album/gintonic_4.jpg';
import gintonic_5 from '../images/Gin Tonic album/gintonic_5.jpg';
import gintonic_6 from '../images/Gin Tonic album/gintonic_6.jpg';
import gintonic_7 from '../images/Gin Tonic album/gintonic_7.jpg';
import gintonic_8 from '../images/Gin Tonic album/gintonic_8.jpg';
import gintonic_9 from '../images/Gin Tonic album/gintonic_9.jpg';
import gintonic_10 from '../images/Gin Tonic album/gintonic_10.jpg';
import gintonic_11 from '../images/Gin Tonic album/gintonic_11.jpg';
import gintonic_12 from '../images/Gin Tonic album/gintonic_12.jpg';
import gintonic_13 from '../images/Gin Tonic album/gintonic_13.jpg';
import gintonic_14 from '../images/Gin Tonic album/gintonic_14.png';

const album=[
    gintonic_1, gintonic_2, gintonic_3,gintonic_4, gintonic_5, gintonic_6, gintonic_7, gintonic_8,gintonic_9, gintonic_10,gintonic_11,gintonic_12,gintonic_13,gintonic_14
];






const Gallery = () => {
    const images = [
        { id: '1', imageName: 'gintonic_1.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '2', imageName: 'gintonic_2.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '3', imageName: 'gintonic_3.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '4', imageName: 'gintonic_4.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '5', imageName: 'gintonic_5.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '6', imageName: 'gintonic_6.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '7', imageName: 'gintonic_7.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '8', imageName: 'gintonic_8.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '9', imageName: 'gintonic_9.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '10', imageName: 'gintonic_10.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '11', imageName: 'gintonic_11.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '12', imageName: 'gintonic_12.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '13', imageName: 'gintonic_13.jpg', tag: 'Gin Tonic Szeged 2020' },
        { id: '14', imageName: 'gintonic_14.png', tag: 'Gin Tonic Szeged 2020' },

    ];

    const [tag, setTag] = useState('Összes');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(
        () => {
            tag === 'Összes' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
        },
        [tag]
    );





    return (
        <MainConatiner >
            <Tags>
            <TagButton name="Összes" tagActive={tag === 'Összes' ? true : false} handleSetTag={setTag} /> /
            <TagButton name="Gin Tonic Szeged 2020" tagActive={tag === 'Gin Tonic Szeged 2020' ? true : false} handleSetTag={setTag} />/
            {/* <TagButton name="free" tagActive={tag === 'free' ? true : false} handleSetTag={setTag} /> /
            <TagButton name="pro" tagActive={tag === 'pro' ? true : false} handleSetTag={setTag} /> */}
            </Tags> 
            <SRLWrapper >
                <Container className="container">
                    {filteredImages.map(image => (
                        <div key={image.id} className="image-card">
                         <a href={album[image.id-1]}>
                            <img className="image" src={album[image.id-1]} />
                        </a> 

                        </div>
                    ))}
                </Container>
            </SRLWrapper>
        </MainConatiner>
    );




};
const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
        <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
            {name.toUpperCase()}
        </button>
    );
};



export default Gallery;
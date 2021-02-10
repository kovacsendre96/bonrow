import React from 'react';
import bonrowCrew from '../images/bonrow-crew.jpg';
import { BioHeaderContainer, ImgWrapper, Description } from '../styles/bioStyles';




const BioHeader = () => {

    return (
        <BioHeaderContainer>
            <Description>
                <p>
                    A Bonrow egy 2019 óta működő együttes Szegedről, műfajuk pedig az indie rock és pop-rock elemeiből táplálkozik. Az együttes két alapítótagja Bőhm Balázs (ének)
                    és Koncz Péter (gitár), valamint jelenlegi tagjaik még Nyíri Ferenc (basszusgitár) és Vincze Bogdán (dob).
                </p>
            </Description>
            <ImgWrapper>{/* <img src={bonrowCrew} /> */}</ImgWrapper>
        </BioHeaderContainer>
        

    );
};

export default BioHeader;
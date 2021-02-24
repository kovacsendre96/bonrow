import React from 'react';
import BioHeader from '../components/BioHeader';
import BioCards from '../components/BioCards';
import {motion} from 'framer-motion';
import {pageAnimation} from '../styles/animation';


const Bio = () => {

    return (
        <motion.div variants={pageAnimation}initial="hidden" animate="show" exit='exit'>
            <BioHeader />
            <BioCards />
        </motion.div>

    );
};

export default Bio;
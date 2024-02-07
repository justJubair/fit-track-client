import { getAllTrainers } from '@/utils/getAllTrainers';
import React from 'react';

const Trainer = async() => {
    const allTrainers = await getAllTrainers();
    console.log(allTrainers)
    return (
        <div>
            
        </div>
    );
};

export default Trainer;
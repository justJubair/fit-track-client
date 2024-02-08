import Trainers from '@/components/Trainers/Trainers';
import { getAllTrainers } from '@/utils/getAllTrainers';
import React from 'react';

const Trainer = async() => {
    const allTrainers = await getAllTrainers();
    // console.log(allTrainers)

    return (
        <div>
            <Trainers allTrainers={allTrainers}/>
        </div>
    );
};

export default Trainer;
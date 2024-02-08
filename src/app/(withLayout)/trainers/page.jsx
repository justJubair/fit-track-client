
import { getAllTrainers } from '@/api/getAllTrainers';
import Trainers from '@/components/Trainers/Trainers';

import React from 'react';

const Trainer = async() => {
    const allTrainers = await getAllTrainers();
    return (
        <div>
            <Trainers allTrainers={allTrainers}/>
        </div>
    );
};

export default Trainer;
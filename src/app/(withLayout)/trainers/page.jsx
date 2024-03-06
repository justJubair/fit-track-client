import { getAllTrainers } from '@/api/getAllTrainers';
import Trainers from '@/components/Trainers/Trainers';
import Trainers2 from '@/components/Trainers/Trainers2';

import React from 'react';

const Trainer = async () => {
    const allTrainers = await getAllTrainers();

    return (
        <div>
            <Trainers2 allTrainers={allTrainers}></Trainers2>
            {/* <Trainers allTrainers={allTrainers} /> */}
        </div>
    );
};

export default Trainer;
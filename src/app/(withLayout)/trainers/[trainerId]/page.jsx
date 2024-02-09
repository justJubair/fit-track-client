import { getAllTrainers } from "@/api/getAllTrainers";

import Image from "next/image";
import Link from "next/link";

const TrainerDetails = async ({ params }) => {

    //cllecting specefic trainer id from params
    const id = params.trainerId;

    //fetching all trainer data
    const allTrainers = await getAllTrainers();

    //filtering the specific trainer from allTrainers using the id
    const trainer = allTrainers.filter(tr => tr._id === id)

    return (
        <div>
            <div className="bg-black h-16"></div>
            <div className="max-w-6xl mx-auto my-8">
                {
                    trainer.map(tr =>
                        <div key={tr._id} className="flex flex-col md:flex-row gap-4">
                            <div className="bg-[#378ae5] p-10 rounded-md flex-1">
                                <ul className="">
                                    <li><Image className="my-4 rounded-md" width={300} height={300} src={tr.profile_image} alt='trainer img' /></li>
                                    <li className="my-4 text-xl text-white">Name: {tr.name}</li>
                                    <li className="my-4 text-xl text-white">Age: {tr.age}</li>
                                    <li className="my-4 text-xl text-white">Gender: {tr.gender}</li>
                                    <li className="my-4 text-xl text-white">Specialized in: {tr.specialization}</li>
                                    <li className="my-4 text-xl text-white">Year of experience: {tr.experience_years}</li>
                                    <li>
                                        <div className="flex justify-between">
                                            <span><Link className="text-white" href='#'>Facebook</Link></span>
                                            <span><Link className="text-white" href='#'>Instagram</Link></span>
                                            <span><Link className="text-white" href='#'>Twitter</Link></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-[70%] p-4 bg-black rounded-md">
                             <h2 className="text-[#378ae5] text-2xl">Bio</h2>
                                <p className="text-white leading-9">{tr.bio}</p>
                                <button className="bg-white px-6 py-2 rounded-[20px] text-black transition-transform duration-300 transform hover:scale-90 focus:outline-none active:scale-110">Hire</button>
                                </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default TrainerDetails;
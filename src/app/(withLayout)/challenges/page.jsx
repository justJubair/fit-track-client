import Challenge from "@/components/Competition/Challenge/Challenge";
import ChallengeSlider from "@/components/Competition/ChallengeSlider/ChallengeSlider";



const ChallengesPage = () => {
    return(
        <div className=" overflow-x-hidden bg-challenge ">
            <ChallengeSlider/>
            <Challenge></Challenge>
        </div>
    )}
export default ChallengesPage;
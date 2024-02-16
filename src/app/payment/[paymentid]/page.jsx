import Checkout from "@/components/Payment/Checkout";



const PaymentId = ({ params }) => {
  

    const planPrice = params.paymentid
   

    let content;

    if (planPrice == 16) {
        content = 'Sliver'
    } else if (planPrice == 35) {
        content = 'Gold'
    } else if (planPrice == 50) {
        content = 'Diamond'
    } else {
        content = 'No'
    }


    return (
        <div className='max-w-6xl mx-auto w-full'>
            <div className='flex justify-between'>
                <div className='my-24'>
                    <h1 className='text-lg text-gray-600'>Plan: {content}</h1>
                    <h2 className='text-3xl font-extrabold'>Price: {planPrice}</h2>
                </div>
                <div>
                 <Checkout planPrice={planPrice}/>
                </div>
            </div>
        </div>
    );
};

export default PaymentId;
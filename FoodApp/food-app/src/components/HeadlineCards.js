import React from 'react';

function HeadlineCards(props) {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12  grid md:grid-cols-3 gap-6'>
            {/*Card*/}
            <div className='rounded-xl relative '>
                {/*Overlay*/}
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out </p>
                    <p className='px-2'>Through 8/26</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/3252766/pexels-photo-3252766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="fruits"/>
            </div>
            {/*Card*/}
            <div className='rounded-xl relative '>
                {/*Overlay*/}
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Restaurants </p>
                    <p className='px-2'>Added Daily</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/314780/pexels-photo-314780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="cherry"/>
            </div>
            {/*Card*/}
            <div className='rounded-xl relative '>
                {/*Overlay*/}
                <div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We delivered beverages </p>
                    <p className='px-2'>Сold Вrinks</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/102742/pexels-photo-102742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="limonade"/>
            </div>
        </div>

    );
}

export default HeadlineCards;
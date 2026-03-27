import React from 'react';
import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="text-black py-12">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              start={0}
              end={100}
              separator=","
              suffix="+"
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className='font-light text-sm'>Completed Projects</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={75}
              separator=","
              suffix="+"
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className='font-light text-sm'>Happy Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={30}
              separator=","
              suffix="+"
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className='font-light text-sm'>Millions Downloads</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold">
            <CountUp
              end={2}
              duration={5}
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </p>
          <p className='font-light text-sm'>Winning Awards</p>
        </div>
      </div>
    </div>
  )
}

export default NumberCounter

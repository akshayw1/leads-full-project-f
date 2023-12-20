import React from 'react';
import SearchCard from './searchCard/searchCard';
import TuteCard from './TuteCard/TuteCard';
import TableComp from './TableComp/TableComp';

const Home = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-2">
        <div className="px-10">
          <SearchCard />
        </div>
        <div className="h-44">
          <TuteCard />
        </div>
      </div>

      <div className="px-10 py-10 w-full flex justify-center">
        <div className="text-white ">
          <TableComp />
        </div>
      </div>
    </div>
  );
};

export default Home;

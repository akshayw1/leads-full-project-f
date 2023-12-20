import React from 'react';
import getUserInfo from '../../utils/getUserInfo';

const TuteCard = () => {
  const info = getUserInfo();
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border max-w-xl mx-auto">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {info && info.data.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Keep enjoying Leads App
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Remaining Search:
            </dt>
            <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              20
            </p>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <p className="text-sm font-medium text-gray-500">
              Remaining Leads:
            </p>
            <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              10
            </p>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TuteCard;

import React from 'react';
import ModeratorButton from './CounsellorButton';

export default function CounsellorAppointments() {
  // data from the database will store here
  const Requests = [
    {
      id: 1,
      avatar: '../../../src/assets/people01.png',
      ID :22045678,
      name: 'Mark Otto',
      date: '2023.10.01',
    },
    {
      id: 2,
      avatar: '../../../src/assets/people02.png',
      ID :22045349,
      name: 'Jacob Thornton',
      date: '2023.10.01',
    },
    {
      id: 3,
      avatar: '../../../src/assets/people03.png',
      ID :22045809,
      name: 'Larry Wild',
      date: '2023.10.01',
    },
    {
      id: 4,
      avatar: '../../../src/assets/Chat/profilePic1.jpg',
      ID :22045384,
      name: 'Marie Horwitz',
      date: '2023.10.01',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-xl md:col-span-3"> 
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <h4 className="text-xl font-semibold text-left ml-5">Appointments</h4>
          <div className="my-2" />
          <div className="overflow-hidden pb-5 px-6">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b border-gray-200 font-medium dark:border-neutral-300">
                <tr>
                  <th scope="col" className="px-6 py-4"></th>
                  <th scope="col" className="px-6 py-4">
                   ID
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {Requests.map((request) => (
                  <tr
                    key={request.id}
                    className="border-b border-gray-200 transition duration-300 ease-in-out hover:bg-neutral-50 hover:bg-neutral-300"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      <img src={request.avatar} alt="" className="w-10 h-10 rounded-full" />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{request.ID}</td>
                    <td className="whitespace-nowrap px-6 py-4">{request.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{request.date}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <ModeratorButton />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import clsx from 'clsx';

interface TeamMemberProps {
  name: string;
  activated: boolean;
  activateMember: () => void;
}
export const TeamMemberCard = ({ name, activated, activateMember }: TeamMemberProps) => {
  return (
    <div
      onClick={() => activateMember()}
      className={clsx(
        'shadow-md rounded-lg p-4 m-2 w-64 hover:shadow-lg transition-shadow duration-300 border-2 cursor-pointer',
        activated ? 'bg-green-100 border-green-500' : 'bg-white border-white',
      )}
    >
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">Status: {activated ? 'Yes' : 'No'}</p>
    </div>
  );
};

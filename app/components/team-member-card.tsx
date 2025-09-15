'use client';
import clsx from 'clsx';

interface TeamMemberProps {
  member: Member;
  activateMember: () => void;
}
export const TeamMemberCard = ({ member, activateMember }: TeamMemberProps) => {
  return (
    <div
      onClick={() => activateMember()}
      className={clsx(
        'shadow-md rounded-lg p-4 w-40 sm:w-64 hover:shadow-lg transition-shadow duration-300 border-2 cursor-pointer',
        member.active
          ? 'bg-green-100 border-green-500'
          : member.match
          ? 'bg-gray-50 border-sky-400'
          : 'bg-white border-white',
      )}
    >
      <h2 className="text-xl font-semibold">
        <span className="text-sky-500">{member.match}</span>
        {member.rest}
      </h2>
      <p className="text-gray-600">{member.active ? 'Done' : 'Pending'}</p>
    </div>
  );
};

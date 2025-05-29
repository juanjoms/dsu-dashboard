'use client';
import { useEffect, useState } from 'react';
import { TeamMemberCard } from './team-member-card';

interface Member {
  id: number;
  name: string;
  activated: boolean;
}

interface DSUDashboardProps {
  members: Member[];
}

export const DSUDashboard = ({ members }: DSUDashboardProps) => {
  const [memberList, setMemberList] = useState(members);

  useEffect(() => {
    let keyBuffer = '';

    const handleKeyDown = (event: KeyboardEvent) => {
      const currentKey = event.key.length === 1 ? event.key.toLowerCase() : '';
      keyBuffer += currentKey;

      const matches = memberList.filter((m) => m.name.toLowerCase().startsWith(keyBuffer));

      if (matches.length === 1) {
        updateMember(matches[0].id);
        keyBuffer = '';
      } else if (matches.length === 0) {
        keyBuffer = ''; // reset on invalid path
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);

    // Run effect once on page load, no dependencies needed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateMember = (id: number) => {
    setMemberList((prev) =>
      prev.map((member) => (member.id === id ? { ...member, activated: !member.activated } : member)),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold p-4 mb-4">DSU Team Members Status</h1>

      <div className="flex flex-wrap justify-center">
        {memberList.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            activated={member.activated}
            activateMember={() => updateMember(member.id)}
          />
        ))}
      </div>
    </div>
  );
};

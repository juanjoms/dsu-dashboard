'use client';
import { useState } from 'react';
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

  const updateMember = (id: number) => {
    setMemberList((prev) =>
      prev.map((member) => (member.id === id ? { ...member, activated: !member.activated } : member)),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">DSU Team Members</h1>

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

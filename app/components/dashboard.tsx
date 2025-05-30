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

      const matchResult = findMatchingMembers(keyBuffer);

      if (matchResult.isSingleMatch) {
        updateMember(matchResult.member.id);
        keyBuffer = '';
        return;
      }

      if (matchResult.noMatches) {
        keyBuffer = '';
        const fallback = findMatchingMembers(currentKey);
        if (fallback.isSingleMatch) {
          updateMember(fallback.member.id);
          keyBuffer = '';
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);

    // Run effect once on page load, no dependencies needed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const findMatchingMembers = (key: string) => {
    const matches = memberList.filter((member) => member.name.toLowerCase().startsWith(key));
    return {
      noMatches: matches.length === 0,
      isSingleMatch: matches.length === 1,
      member: matches[0],
    };
  };

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

      <p className="text-gray-500 mt-4">
        Type the first one or two letters of a member&apos;s name, or click their card to mark them as done.
      </p>
    </div>
  );
};

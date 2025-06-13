'use client';
import { useEffect, useState } from 'react';
import { TeamMemberCard } from './team-member-card';

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
      let matchingMembers = memberList.filter((member) => member.name.toLowerCase().startsWith(keyBuffer));
      debugger;
      if (matchingMembers.length === 0) {
        matchingMembers = memberList.filter((member) => member.name.toLowerCase().startsWith(currentKey));
        keyBuffer = currentKey;
      }

      if (matchingMembers.length === 0) {
        updateMatches('');
      }
      if (matchingMembers.length === 1) {
        activateMember(matchingMembers[0].id);
        keyBuffer = '';
      }
      if (matchingMembers.length > 1) {
        updateMatches(keyBuffer);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);

    // Run effect once on page load, no dependencies needed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateMatches = (keyBuffer: string) => {
    setMemberList((prev) =>
      prev.map((member) => {
        const match = member.name.match(new RegExp(`^${keyBuffer}`, 'i'))?.[0] || '';
        const rest = member.name.replace(match, '');
        return {
          ...member,
          match,
          rest,
        };
      }),
    );
  };

  const activateMember = (id: string) => {
    setMemberList((prev) =>
      prev.map((member) => ({
        ...member,
        active: member.id === id ? !member.active : member.active,
        match: '',
        rest: member.name,
      })),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold p-4 mb-4">DSU Team Members Status</h1>

      <div className="flex flex-wrap justify-center">
        {memberList.map((member) => (
          <TeamMemberCard key={member.id} member={member} activateMember={() => activateMember(member.id)} />
        ))}
      </div>

      <p className="text-gray-500 mt-4">
        Type the initial(s) of a team member, or click their name to mark them as done.
      </p>
    </div>
  );
};

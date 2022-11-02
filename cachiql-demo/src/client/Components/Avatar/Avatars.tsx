import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { MemberType } from '../../interfaces/interfaces';
import { teamMembers } from '../AboutUs/members';
import nextId from 'react-id-generator';
const Avatars: React.FC = () => {
  return (
    <>
      {teamMembers.map((member: MemberType) => {
        return (
          <Avatar
            key={nextId()}
            alt={member.name}
            src={`../assets/${member.image}`}
          />
        );
      })}
    </>
  );
};

export default Avatars;

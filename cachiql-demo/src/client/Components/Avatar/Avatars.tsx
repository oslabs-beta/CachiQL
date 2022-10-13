import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { MemberType } from '../../interfaces/interfaces';
import { teamMembers } from '../AboutUs/members';
const Avatars: React.FC = () => {
  return (
    <React.Fragment>
      {teamMembers.map((member: MemberType) => {
        return <Avatar alt={member.name} src={`../assets/${member.image}`} />;
      })}
    </React.Fragment>
  );
};

export default Avatars;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { MemberType } from '../../interfaces/interfaces';
const teamMembers: MemberType[] = [
  { name: 'Kaden Johnson', image: 'kadenPic.jpg' },
  { name: 'Vanessa Lutz', image: 'vanessaPic.jpg' },
  { name: 'Eddyddddd Zapata', image: 'eddyPic.jpg' },
  { name: 'Fahad Shaikh', image: 'fahadPic.jpg' },
];

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

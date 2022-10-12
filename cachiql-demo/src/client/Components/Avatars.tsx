import React from 'react';
import Avatar from '@material-ui/core/Avatar';

interface MemberType {
  name: string;
  image: string;
}

const teamMembers: MemberType[] = [
  { name: 'Kaden Johnson', image: 'kadenPic.jpg' },
  { name: 'Vanessa Lutz', image: 'vanessaPic.jpg' },
  { name: 'Eddyddddd Zapata', image: 'eddyPic.jpg' },
  { name: 'Fahad Shaikh', image: 'fahadPic.jpg' }
];

export const Avatars = () => {
  return (
    <React.Fragment>
      {teamMembers.map((member: MemberType) => {
        return <Avatar alt={member.name} src={`../assets/${member.image}`} />;
      })}
    </React.Fragment>
  );
};

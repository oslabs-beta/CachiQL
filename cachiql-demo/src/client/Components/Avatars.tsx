import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

// const useStyles = makeStyles((theme) => ({

// }));

export const Avatars = () => {
  return (
    <React.Fragment>
      <Avatar alt="Kaden Johnson" src="../assets/kadenPic.jpg" />
      <Avatar alt="Vanessa Lutz" src="../assets/vanessaPic.jpg" />
      <Avatar alt="Eddie Zapata" src="../assets/eddiePic.jpg" />
      <Avatar alt="Fahad Shaikh" src="../assets/fahadPic.jpg" />
    </React.Fragment>
  );
};

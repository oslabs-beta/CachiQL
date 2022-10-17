import React from 'react';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useFloatNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/float';
import GitHubIcon from '@material-ui/icons/GitHub';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import RateReviewIcon from '@material-ui/icons/RateReview';
import InfoIcon from '@material-ui/icons/Info';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from '@material-ui/core';


const FloatNavigationMenuStyle = React.memo(
  function FloatNavigationMenu() {
    return (
      <>
        <CssBaseline />
        <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>
          <NavItem active>
            <AutorenewIcon />
            MAGICAL CACHiQL
          </NavItem>
          <NavItem
            onClick={() => window.open('https://www.npmjs.com/package/cachiql')}
          >
            <GitHubIcon />
            NPM PACKAGE
          </NavItem>
          <NavItem href='#demo'>
              <OndemandVideoIcon />
              DEMO
          </NavItem>
          <NavItem
            onClick={() =>
              window.open(
                'https://medium.com/@vanessayplutz/deeply-understand-the-graphql-n-1-issue-and-dataloader-5a2c8b4de050'
              )
            }
          >
            <RateReviewIcon />
            MEDIUM
          </NavItem>
          <NavItem href='#aboutus'>
            <InfoIcon />
            ABOUT US
          </NavItem>
        </NavMenu>
      </>
    );
  }
);

export default FloatNavigationMenuStyle;

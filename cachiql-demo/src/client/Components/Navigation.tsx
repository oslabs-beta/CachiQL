import React from 'react';
// import { Link } from 'gatsby'; // can be react-router-dom, reach router
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { useFloatNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/float';
import GitHubIcon from '@material-ui/icons/GitHub';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import RateReviewIcon from '@material-ui/icons/RateReview';
import InfoIcon from '@material-ui/icons/Info';
export const FloatNavigationMenuStyle = React.memo(
  function FloatNavigationMenu() {
    return (
      <>
        <NavMenu gutter={1} useStyles={useFloatNavigationMenuStyles}>
          <NavItem active>
            <AutorenewIcon />
            Magical CachiQL
          </NavItem>
          <NavItem>
            <GitHubIcon />
            NPM Package
          </NavItem>
          <NavItem>
            <OndemandVideoIcon />
            Demo
          </NavItem>
          <NavItem>
            <RateReviewIcon />
            Reviews
          </NavItem>
          <NavItem>
            <InfoIcon />
            About Us
          </NavItem>
        </NavMenu>
      </>
    );
  }
);

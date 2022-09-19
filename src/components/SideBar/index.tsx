import React, { FC } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

interface Props {
   open: boolean;
   toggleOpen: () => void;
   children: React.ReactNode;
   anchor?: 'left' | 'right';
}

const FakeBar = styled(Box, { shouldForwardProp: (p) => p !== 'show' })<{ show?: boolean }>(({ theme, show }) => ({
   width: 10,
   height: '100vh',
   position: 'fixed',
   right: 0,
   top: `102px`,
   background: theme.palette.background.default,
   borderLeft: `1px solid #25272C`,
   visibility: show ? 'visible' : 'hidden',
   transition: '.5s',
}));

const StyledSideBar: FC<Props> = ({ anchor = 'left', open, toggleOpen, children }) => {

   return (
      <div>
         <SwipeableDrawer
            // swipeAreaWidth={isMobile ? 20 : 0}
            anchor={anchor}
            open={open}
            onClose={toggleOpen}
            onOpen={toggleOpen}
            BackdropProps={{ invisible: true }}
            PaperProps={{
               elevation: 0,
               sx: {
                  borderRight: anchor === 'left' ? '1px solid #25272C' : 'none',
                  borderLeft: anchor === 'right' ? '1px solid #25272C' : 'none',
                  borderRadius: 0,
                  width: { xs: '100%', sm: '360px' },
                  // ml: anchor === 'left' ? `${300}px` : 'none',
                  // mr: anchor !== 'left' ? `${300}px` : 'none',
                  overflow: 'hidden',
                  // height: `calc(100% - ${NAVBAR_HEIGHT}px)`,
                  // mt: `${NAVBAR_HEIGHT}px`,
               },
            }}
         >
            <FakeBar show={open && anchor === 'right'} />
            {children}
         </SwipeableDrawer>
      </div>
   );
};

export default StyledSideBar;
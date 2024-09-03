// import * as React from 'react';
// // import { styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import CssBaseline from '@mui/material/CssBaseline';

// import Drawer from './Drawer';
// import AppBarMenu from './AppBar';

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const Main = styled('div')(() => ({
//   height: '100vh',
//   width: '100%',
//   padding: '2em',
// }));

// interface IMiniDrawer {
//   children: React.ReactNode;
// }

// const MiniDrawer: React.FC<IMiniDrawer> = ({ children }) => {
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />

//       <AppBarMenu open={open} handleDrawerOpen={handleDrawerOpen} />

//       <Drawer open={open} setOpen={setOpen} />

//       <Main>
//         <DrawerHeader />
//         {children}
//       </Main>
//     </Box>
//   );
// };

// export default MiniDrawer;

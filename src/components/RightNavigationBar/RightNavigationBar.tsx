import AppBar from "@mui/material/AppBar";
import simpleLogoImage from "../../assets/simple-logo.png";
import simpleCraLogoImage from "../../assets/simple-cra-logo.png";
import Box from "@mui/material/Box";
import { IconButton, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CellTowerIcon from "@mui/icons-material/CellTower";
import MapWithMarkerIcon from "src/components/Icons/MapWithMarkerIcon";
import MapWithOperatorIcon from "src/components/Icons/MapWithOperatorIcon";
import { useEffect, useState } from "react";

export default function RightNavigationBar() {
  const [activePage, setActivePage] = useState("home");

  // useEffect(() => {
  //   const page = pathname?.split("/").slice(-1)[0];
  //
  //   if (!page){
  //     setActivePage("home");
  //   } else {
  //     setActivePage(page)
  //   }
  // }, [pathname]);

  return (
    <AppBar
      position="fixed"
      sx={{
        right:"auto",
        left:0,        height:"100%",
        pt: 1,
        pb: 1,
        width: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#ffffff",
      }}
    >
      <Stack>
        <Box component={"img"} src={simpleCraLogoImage} width={50} />
        <Box component={"img"} src={simpleLogoImage} width={50} />
      </Stack>
      <Stack>
        <IconButton href={"/"}>
          <HomeIcon
            sx={{ color: activePage !== "home" ? "white" : "#FCA600" }}
          />
        </IconButton>
        <IconButton href={"/operator"}>
          <CellTowerIcon
            sx={{ color: activePage !== "operator" ? "white" : "#FCA600" }}
          />
        </IconButton>
        <IconButton href={"/province"}>
          <MapWithMarkerIcon
            sx={{ stroke: activePage !== "province" ? "white" : "#FCA600" }}
          />
        </IconButton>
        <IconButton href={"/operator-province"}>
          <MapWithOperatorIcon
            sx={{ stroke: activePage !== "operator-province" ? "white" : "#FCA600" }}
          />
        </IconButton>
      </Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Typography fontWeight={"bold"} fontSize={10} >
به‌روزرسانی:
        </Typography>
        <Typography fontSize={11} fontWeight={"light"}>
          1401/10/10
        </Typography>
      </Stack>
    </AppBar>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import AppBar from "@mui/material/AppBar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
//
// const drawerWidth = 240;
//
// // interface Props {
// //   /**
// //    * Injected by the documentation to work in an iframe.
// //    * You won't need it on your project.
// //    */
// //   window?: () => Window;
// // }
//
// export default function ResponsiveDrawer() {
//   // const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };
//
//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
//
//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Responsive drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//         }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
//           dolor purus non enim praesent elementum facilisis leo vel. Risus at
//           ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
//           quisque non tellus. Convallis convallis tellus id interdum velit
//           laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
//           adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
//           integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
//           eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
//           quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
//           vivamus at augue. At augue eget arcu dictum varius duis at consectetur
//           lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
//           faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//           ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
//           elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
//           sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
//           mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
//           risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
//           purus viverra accumsan in. In hendrerit gravida rutrum quisque non
//           tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
//           morbi tristique senectus et. Adipiscing elit duis tristique
//           sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: "none", sm: "block" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//     </Box>
//   );
// }

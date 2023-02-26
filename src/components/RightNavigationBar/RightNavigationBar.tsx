import AppBar from "@mui/material/AppBar";
import simpleLogoImage from "../../assets/simple-logo.png";
import simpleCraLogoImage from "../../assets/simple-cra-logo.png";
import Box from "@mui/material/Box";
import {IconButton, Stack, Typography} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CellTowerIcon from "@mui/icons-material/CellTower";
import MapWithMarkerIcon from "src/components/Icons/MapWithMarkerIcon";
import MapWithOperatorIcon from "src/components/Icons/MapWithOperatorIcon";
import {useState} from "react";

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
				right: "auto",
				left: 0,
        height: "100%",
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
				<Box component={"img"} src={simpleCraLogoImage} width={50} mb={1}/>
				<Box component={"img"} src={simpleLogoImage} width={50}/>
			</Stack>
			<Stack gap={1}>
				<IconButton href={"/"}>
					<HomeIcon
						sx={{color: activePage !== "home" ? "white" : "#FCA600"}}
					/>
				</IconButton>
				<IconButton href={"/operator"}>
					<CellTowerIcon
						sx={{color: activePage !== "operator" ? "white" : "#FCA600"}}
					/>
				</IconButton>
				<IconButton href={"/province"}>
					<MapWithMarkerIcon
						sx={{stroke: activePage !== "province" ? "white" : "#FCA600"}}
					/>
				</IconButton>
				<IconButton href={"/operator-province"}>
					<MapWithOperatorIcon
						sx={{stroke: activePage !== "operator-province" ? "white" : "#FCA600"}}
					/>
				</IconButton>
			</Stack>
			<Stack alignItems={"center"} justifyContent={"center"}>
				<Typography fontWeight={"bold"} fontSize={10}>
					به‌روزرسانی:
				</Typography>
				<Typography fontSize={11} fontWeight={"light"}>
					1401/10/10
				</Typography>
			</Stack>
		</AppBar>
	);
}


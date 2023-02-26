import Box from "@mui/material/Box";
import SvgIcon, {SvgIconProps} from "@mui/material/SvgIcon";
import image from "../../../public/mouse-on-globe.png"

const MouseOnGlobeIcon = (props: SvgIconProps) => (
  <Box component={"img"} src={image}  />
);

export default MouseOnGlobeIcon;

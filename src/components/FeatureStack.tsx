import { Stack, StackProps } from "@mui/material";

const FeatureStack = (props: StackProps) => (
  <Stack
    {...props}
    sx={{
      width: "100%",
      p: 1,
      borderRadius: 5,
      color: "#ffffff",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      background:
        "linear-gradient(180deg, #2D346C 0%, rgba(0, 73, 181, 0.7) 100%)",
      ...props.sx,
    }}
  />
);

export default FeatureStack;

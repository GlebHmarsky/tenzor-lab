import { createTheme } from "@mui/system";
import { palette } from "./palette";
import { shadows } from "./shadow";
import { typography } from "./typography";

export const theme = createTheme({
  spacing: 8,

  palette,
  typography,
  shadows,

})
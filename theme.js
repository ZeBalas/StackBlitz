import { createMuiTheme } from '@material-ui/core/styles';

const PRIMARY_COLOR = "#0D0630";
const SECONDARY_COLOR = "#8BBEB2";

export default createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR
    },
    secondary: {
      main: SECONDARY_COLOR
    }
  }
});
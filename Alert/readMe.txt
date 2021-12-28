import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "./component/common/Alert/AlertTemplate";
................................................................
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: "10px",
  transition: transitions.SCALE,
};
...................................................................
<AlertProvider template={AlertTemplate} {...options}> </AlertProvider>

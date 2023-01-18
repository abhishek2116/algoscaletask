import "antd/dist/reset.css";
import { Col } from "antd";
import Navbar from "./components/Navbar";
import Routing from "./Routes/Routing";

function App() {
  return (
    <Col style={{ margin: "30px 50px" }}>
      <Navbar />
      <Routing />
    </Col>
  );
}

export default App;
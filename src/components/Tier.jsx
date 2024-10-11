import { useParams } from "react-router-dom";

function Tier() {
  const { tier } = useParams();
  return <div>{tier}</div>;
}

export default Tier;

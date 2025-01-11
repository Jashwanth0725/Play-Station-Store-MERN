import { useStateValue } from "../components/StateProvider";

function QuantityCounter() {
  let count = 0;
  const [{ basket, dispach }] = useStateValue();

  basket.forEach((item) => {
    count += item.quantity;
  });

  return count;
}

export default QuantityCounter;

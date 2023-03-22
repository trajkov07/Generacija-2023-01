import { useDispatch, useSelector } from "react-redux";
import { buyCake, restockCakes } from "../actions/CakeActions";

export const Cake = () => {
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);
  const message = useSelector((state) => state.CakeReducer.message);

  return (
    <div>
      <p>Cakes: {cakes}</p>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <button disabled={cakes < 1} onClick={() => dispatch(buyCake(1))}>
        Buy 1 Cake
      </button>
      <button disabled={cakes < 2} onClick={() => dispatch(buyCake(2))}>
        Buy 2 Cakes
      </button>
      <button disabled={cakes < 3} onClick={() => dispatch(buyCake(3))}>
        Buy 3 Cakes
      </button>
      <button onClick={() => dispatch(restockCakes())}>Restock Cakes</button>
    </div>
  );
};

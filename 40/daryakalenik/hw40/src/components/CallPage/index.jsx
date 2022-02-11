import { useParams, useNavigate } from "react-router-dom";

function CallPage() {
  const number = useParams();
  const navigate = useNavigate();
  console.log(number);
  return (
    <div>
      <p>5 last calls from the number {number.number}</p>
      <p>
        There's no such information in contacts array so this page will be empty
        :(
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
export default CallPage;

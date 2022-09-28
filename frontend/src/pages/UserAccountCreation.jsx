import AccountCreation from "../components/AccountCreation";
import DescribeMe from "../components/DescribeMe";

export default function UserAccountCreation() {
  return (
    <div>
      <AccountCreation />
      <DescribeMe />
      <button className="generic-btn buttonSub" type="button">
        {" "}
        Soumettre{" "}
      </button>
    </div>
  );
}

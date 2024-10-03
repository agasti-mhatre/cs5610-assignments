import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
      <Link to={`/Kanbas/Account/Signin`} className="list-group-item active border border-0 me-3"> Signin </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`} className="list-group-item text-danger border border-0 me-3"> Signup </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} className="list-group-item text-danger border border-0 me-3"> Profile </Link> <br/>
    </div>
);}

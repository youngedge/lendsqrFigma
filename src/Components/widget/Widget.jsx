import "./Widget.css";
import { PiUsers } from "react-icons/pi";
import { PiUsersThree } from "react-icons/pi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LiaCoinsSolid } from "react-icons/lia";

export const Widget = ({type}) => {

    let data;

    switch (type) {
        case "USERS":
            data = {
                iconuser: (
                    <PiUsers style={{
                            color: "#DF18FF", backgroundColor: "#d98be5", borderRadius: "90%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
                        }
                    }/>
                ),
                title: "USERS",
                amount: "2,453"
            };
            break;
        case "ACTIVE USERS":
            data = {
                iconuser: (
                    <PiUsersThree
                        style={{
                            color: "#5718FF", backgroundColor: "#d98be5", borderRadius: "90%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
                        }
                    }/>
                ),
                title: "ACTIVE USERS",
                amount: "2,453"
            };
            break;
        case "USERS WITH LOANS":
            data = {
                iconuser: (
                    <IoDocumentTextOutline
                        style={{
                            color: "#F55F44", backgroundColor: "#d98be5", borderRadius: "90%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
                        }
                    }/>
                ),
                title: "USERS WITH LOANS",
                amount: "12,453"
            };
            break;
        case "USERS WITH SAVINGS":
            data = {
                iconuser: (
                    <LiaCoinsSolid
                        style={{
                            color: "#FF3366", backgroundColor: "#f796ae", borderRadius: "90%", width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
                        }
                    }/>
                ),
                title: "USERS WITH SAVINGS",
                amount: "102,453"
            };
            break;
        default: break;
    }

return(
    <div className="widget">
        <div className="left">
            <span className="iconuser">
                {data.iconuser}
            </span>
            <span className="title">
                {data.title}
            </span>
            <span className="amount">
                {data.amount}
            </span>
        </div>
        {/* <div className="right">
            right
        </div> */}
    </div>
    )
}
export default Widget;
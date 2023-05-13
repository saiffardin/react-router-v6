import {useParams} from "react-router-dom";

const UserDetails = () => {
    const {userId} = useParams()
    
    return (
        <div>
            <h4>User Details - {userId}</h4>            
        </div>
    );
};

export default UserDetails;
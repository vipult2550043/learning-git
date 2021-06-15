import React, { useEffect}from 'react'
import { connect } from "react-redux";
import { fetchUserReq, fetchUserSucess, fetchUserFailure, fetchUsers } from "./redux/user/userAction";

function UsersContainer({ USERS, fetchUsers}) {
    useEffect(() => {
        fetchUsers();

    }, []);
    
    return USERS.loading ? (
        <h2>Loading..</h2>
    ) : USERS.error ? (
            <h2>{ USERS.error}</h2>
        ) : ( <div>
                <h2>User List</h2>
                <div>
                    {
                        (USERS && USERS.data && USERS.data.map((user) => <p key={user.id}>{user.name}</p>))
                    }
                </div>
            </div>
        )
}

const MapStateToprops = (state) => {

    return {
    USERS : state.user
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        // fetchUserReq: () => dispatch(fetchUserReq()),
        // fetchUserSucess: () => dispatch(fetchUserSucess()),
        // fetchUserFailure: () => dispatch(fetchUserFailure()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(MapStateToprops, MapDispatchToProps)(UsersContainer);

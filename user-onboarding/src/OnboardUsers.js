import React from 'react';

function OnboardUsers(props) {
    const {user} = props
    return (
        <div>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <h2>{user.password}</h2>
        </div>
    )
}
export default OnboardUsers;
import React from 'react';

function OnboardUsers(props) {
    const {details} = props
    return (
        <div>
            <h2>{details.first_name}</h2>
            <h2>{details.last_name}</h2>
            <h2>{details.email}</h2>
            <h2>{details.password}</h2>
        </div>
    )
}
export default OnboardUsers;
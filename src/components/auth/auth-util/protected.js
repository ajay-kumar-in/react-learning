import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Protected = (props) => {
    const { CustomComponent } = props;
    const navigate = useNavigate();

    let token = useSelector(state=> {
        return state.auth?.userAuthData?.token;
    })

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [navigate, token]);

    return <React.Fragment>
        <CustomComponent />
    </React.Fragment>
}

export default React.memo(Protected);
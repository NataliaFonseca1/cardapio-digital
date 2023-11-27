import React from "react";

import { Button } from "./styles";

const ButtonCM = ({children, onClick, ...rest}) => {
    return(
        <Button onClick={onClick} {...rest}>
           {children}
        </Button>
    )
}

export default ButtonCM;
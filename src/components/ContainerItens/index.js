import React from "react";

import { ContainerItens as Container } from "./styles";

function ContainerItens({children,isBluer}){


    return <Container isBluer={isBluer}>{children} </Container>


}

export default ContainerItens
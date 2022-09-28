import React from 'react';
import '../styles/SubHeader.css'

const SubHeader = () => (
    <h3 className='SubHeaderComponent'>
        <span>La primer ciudad seleccionada automáticamente, la toma por geolocalización. </span>
        <br/>
        <span> En caso de querer cambiar la ciudad, desplegá el combo y se podrá elegir entre cualquiera de las 5 ciudades preseleccionadas.</span>
    </h3>
);

export default SubHeader;
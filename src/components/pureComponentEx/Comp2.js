import React, { memo } from 'react';
const Comp2=memo((props)=>{
    const {counter2}=props;
    console.log('Comp2 render',counter2);
    return <div>{`Comp2 ${counter2}`} </div>
})
export default Comp2;
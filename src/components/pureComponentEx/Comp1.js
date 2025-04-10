import React, { memo } from 'react';
const Comp1=memo((props)=>{
    console.log('props',props)
    const {counter1}=props
    console.log('Comp1 Rendered',counter1);
    return <div>{`Comp1 ${counter1}`}</div>
}
)

export default Comp1;
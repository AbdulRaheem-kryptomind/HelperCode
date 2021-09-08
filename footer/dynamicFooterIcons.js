import React,{useState} from 'react'

const DynamicImages = ({name}) => {
    const [active, setActive] = useState(false);

    
    
    return (
     <img src={`/${active?(name+"Active"):name}.svg`}
     onMouseEnter={()=>setActive(true)}
     onMouseLeave={()=>setActive(false)}/>
    )
}

export default DynamicImages

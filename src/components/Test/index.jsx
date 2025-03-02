import { useState } from 'react';

function Test({test}) {
    const [heart, setHeart] = useState(test)

    if(!heart){
        console.log("HIT");
        setHeart( { name: 'Test Test', imageId: '4xj9dii' } );
    }

    return (
        <div className={"test"}>
            {heart ? heart.name : ''}
        </div>
    );
}
export default Test;
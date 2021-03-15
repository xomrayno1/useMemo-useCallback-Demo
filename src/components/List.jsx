import React, {   useEffect, useState } from 'react';

function List(props) {
    const [items, setItems] = useState([]);
    const {getItems} = props;
    useEffect(() => {
        setItems(getItems());
        console.log("update items");
    },[getItems])
    return (
        <>
            <ul>
                {
                    items.map((item,idx) => <li key={idx}>{item}</li>)
                }     
            </ul>   
        </>   
    );
}

export default List;
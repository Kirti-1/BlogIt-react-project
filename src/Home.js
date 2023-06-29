

import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { Firestore } from "./firebase";

export function Home(){
    
    var [listItem, setListItem] = useState([])
   


    var token = useRef('false');
    const getDbData = () => {Firestore.collection('Posts').onSnapshot((snapshot) => {
              
        const list = snapshot.docs.map((doc) => {
            let data = doc.data();
            // console.log(doc.id);

            // To add uniqueness to our blog post card
            data["key"] = doc.id;
;            
            return data;
        });
        setListItem(list);
        // console.log(list);
        token.current = 'true';
         
    });
    }
    if(token.current === 'false'){
        console.log(getDbData())
    }
    console.log(token);

    const navigate = useNavigate();
    const handleViewDetails = (id) => {
        navigate(`./post-details/${id}`);
    }

    return(
        <div> 
        {
            //  ---- CSS PENDING --- 
            listItem.map((l)=>{
                // Blog post card with title, subtitle and content.
                return (
                    <div key={l.key} style={{textAlign:'left', width:'50%', marginLeft:'50px'}}>
                        {/* <h1>{l.title}</h1>
                        <h4>{l.subtitle}</h4>
                        <button onClick={() => handleViewDetails(l.key)}>View Details</button> */}


                        {/* making it a card */}
                        <div className="card">
                        <h5 className="card-header">{l.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title">{l.subtitle}</h5>
                            <button style={{}} className="btn btn-primary" onClick={() => handleViewDetails(l.key)}>View Details</button>
                        </div>
                        </div>




                        <br/>


                    </div>)
            })


            
        }

        </div>
    );
}

 
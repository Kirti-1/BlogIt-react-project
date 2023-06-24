

import { useState } from "react";
import { Firestore } from "./firebase";

export function Home(){
    
    var [listItem, setListItem] = useState([])
   
    Firestore.collection('Posts').onSnapshot((snapshot) => {
              
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
         
    });
    return(
        <div> 
        {
            //  ---- CSS PENDING --- 
            listItem.map((l)=>{
                // Blog post card with title, subtitle and content.
                return (<div key={l.key}><h1>{l.title}</h1><h3>{l.subtitle}</h3><p>{l.content}</p></div>)
            })


            
        }

        </div>
    );
}

 
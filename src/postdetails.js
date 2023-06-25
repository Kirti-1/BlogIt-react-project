import { useState, useRef } from "react";
import { Firestore } from "./firebase";


export function PostDetails(){

    var [listItem, setListItem] = useState([])

    const pathname = window.location.pathname.split('/');

    const postId = pathname[pathname.length-1];

    const db = Firestore.collection('Posts');


    
    var token = useRef('false');
    const getDbData = () => {db.onSnapshot(snapshot => {

        var list = []
        
        snapshot.docs.map(doc => {
            
            var data = doc.data();
            // console.log(doc.id, data.title);

            if(doc.id === postId){
                data['key'] = doc.id;
                list.push(data);                
            }
            return '';
        })

        setListItem(list);

        //useRef token for it to only fetch data once rather than get involved in an infinite loop.
        token.current = 'true';
    })
    }
    if(token.current === 'false'){
        console.log(getDbData())
    }
    console.log(token);



    return(
        
        <div> {
            listItem.map(element => {
                return <h1 style={{color:'pink'}} key={element.key}>{element.title}</h1>
            })
        }</div>
    );
}

 
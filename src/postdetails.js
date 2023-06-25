import { useState, useRef } from "react";
import { Firestore } from "./firebase";


export function PostDetails(){

    var [listItem, setListItem] = useState([])

    console.log('1. ---- ')
    const pathname = window.location.pathname.split('/');

    console.log('2. ---- ')
    const postId = pathname[pathname.length-1];

    console.log('3. ---- ')
    const db = Firestore.collection('Posts');


    console.log('4. ---- ')
    
    var token = useRef('false');
    const getDbData = () => {db.onSnapshot(snapshot => {

        console.log('5. ---- ')
        var list = []
        
        snapshot.docs.map(doc => {


            console.log('6. ---- ')

            
            var data = doc.data();
            // console.log(doc.id, data.title);

            if(doc.id === postId){
                data['key'] = doc.id;
                list.push(data);                
            }
            return '';
        })

        console.log('7. ---- ')
        setListItem(list);
        token.current = 'true';
        // console.log(listItem);
    })
    }
    if(token.current === 'false'){
        console.log(getDbData())
    }
    console.log(token);




console.log('9. ---- ')


    return(
        
        <div> {
            listItem.map(element => {
                return <h1 style={{color:'pink'}} key={element.key}>{element.title}</h1>
            })
        }</div>
    );
}

 
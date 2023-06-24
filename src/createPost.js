// import { useState } from "react";

import { Firestore } from "./firebase";
import {useFormCustom} from './hook'


export function CreatePost(){

    // const [title, setTitle] = useState();
    // const [subtitle, setSubtitle] = useState();
    // const [content, setContent] = useState();

    const title = useFormCustom()
    const subtitle = useFormCustom()
    const content = useFormCustom() 
    
    const handleSubmit = () => {
        console.log(title,subtitle,content);

        try{
            Firestore
            .collection("Posts")
            .add({
                title:title.val,
                subtitle:subtitle.val,
                content:content.val,
                createdDateTime:new Date()
            });
        }catch(e){
            console.log(e);
        }
        
        
        console.log('added!')


        document.getElementById('title').value = ''
        document.getElementById('subtitle').value = ''
        document.getElementById('content').value = ''

    }
    return(
        <div> 
            <label for="title">Title : </label>
            <input type="text" {...title}  id="title"/>

            <label for="subtitle" >Sub Title : </label>
            <input type="text" id="subtitle" {...subtitle} />
            <label for="content">Content : </label>
            <textarea id="content" {...content}></textarea>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}
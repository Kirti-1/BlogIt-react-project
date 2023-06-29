// import { useState } from "react";

import { Firestore } from "./firebase";
import {useFormCustom} from './hook'


export function CreatePost(){

    // const [title, setTitle] = useState();
    // const [subtitle, setSubtitle] = useState();
    // const [content, setContent] = useState();


    // Created Custom Hook for generic based usage of useState for title, subtitle and content.
    const title = useFormCustom()
    const subtitle = useFormCustom()
    const content = useFormCustom() 
    
    const handleSubmit = () => {
        console.log(title,subtitle,content);


        console.log(title.val,subtitle.val,content.val);

        
            // add post to firestore
            Firestore
            .collection("Posts")
            .add({
                title:title.val,
                subtitle:subtitle.val,
                content:content.val,
                createdDateTime:new Date()
            });
      
        
        
        console.log('added!')

        // Clearing the values for better UI Experience -- CSS Pending -- 

        document.getElementById('title').value = ''
        document.getElementById('subtitle').value = ''
        document.getElementById('content').value = ''

    }
    return(
        <div> 

            {/*  {...title} returns value and the onChange function which indirectly calls setValue of useState */}
            <div style={{width:'80%', textAlign:'left',marginLeft:'50px'}}>
                <div className="form-group">
                    <label htmlFor="title">Title : </label>
                    <input className="form-control" type="text" {...title}  id="title"/>
                </div>

                <div className="form-group">
                    <label htmlFor="subtitle" >Sub Title : </label>
                    <input className="form-control" type="text" id="subtitle" {...subtitle} />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content : </label>
                    <textarea style={{height:'20em'}} className="form-control" id="content" {...content}></textarea>
                </div>
            
            
            
                <button style={{marginLeft:'50%', marginTop:'30px'}} type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

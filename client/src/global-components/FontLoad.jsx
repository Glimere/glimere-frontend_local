import React, {useState, useEffect} from 'react'
import Edensor from "../assets/fonts/Edensor-Free.otf"


export default function FontLoad() {


     useEffect(() => {

        var fontss = new FontFace("Edensor", `url(${Edensor})`, {
            style: 'normal', weight: '400'
        });

        //   console.log('font', fonts[i].font.family)
        
        // don't wait for the render tree, initiate an immediate fetch!
        fontss.load().then(function(loaded_face) {
            // apply the font (which may re-render text and cause a page reflow)
            // after the font has finished downloading 
          
            document.fonts.add(loaded_face);
            // document.body.style.fontFamily = `Edensor, serif`;

            // console.log("document",document.body.style.fontFamily)
        
            // OR... by default the content is hidden,
            // and it's rendered after the font is available

            // var content = document.getElementById(`text${index}`);
            // content.style.visibility = "visible";
            // content.style.fontFamily = `${font.family}`
            
     
            // OR... apply your own render strategy here...
        }).catch(function(err) {
            console.log('error', err)
        });

        
      })

}
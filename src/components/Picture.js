import React from 'react'

import Background from '../Background.png'

class Picture extends React.Component{
    render(){
        return(
            <div class="container">
            <div class="title">
            <div class="image">
           <img class="img1"  src={Background} alt="Background"  />
                 </div>
                 </div>
                 </div>

         );
     }

 }

 export default Picture;
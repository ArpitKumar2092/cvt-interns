import React from 'react'
import Paragraph from './Paragraph'
import Picture from './Picture'


class Title extends React.Component{
    render(){
        return(
            <div class="container">
            <div class="title">
        <div class="sub-title">
            <h1>Supercharging somali startups</h1>
          <Paragraph />
        
            </div>
            <Picture />
            
            </div>
            
            </div>

        )
    }
}
export default Title;
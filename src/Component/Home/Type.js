import React from 'react';
import Typewriter from 'typewriter-effect';
function Type(props) {
    return (
      <Typewriter 
        options={{
            strings:[
                "MERN Stack Web Developer",
                "Java Programmer"
            ],
            autoStart:true,
            loop:true,
            deleteSpeed:50,
        }}
      />  
    );
}

export default Type;
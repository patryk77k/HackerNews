import React from 'react';


export default function Header() {
    return (
        <div className="Nav">
            <span>
            <a href="#"><img src="./logo.png"/></a>
           <b> <a href="">Hacker News</a></b>
           <b> <a href="">new</a> </b>
           <b> <a href="">past</a></b>
           <b> <a href="">comments</a> </b>
           <b> <a href="">ask</a>  </b>
           <b> <a href="">show</a>  </b>
           <b> <a href="">jobs</a>  </b>
           <b> <a href="">submit</a></b>
           <b className='Login'> <a href="">login</a></b>
        </span>
        </div>
    );

}
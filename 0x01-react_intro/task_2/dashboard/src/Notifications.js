import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import {getLatestNotification} from './utils';


function Notifications(){
    return <div class="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
            <li data-periority="default">New course available</li>
            <li data-periority="urgent">New resume available</li>
            <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>

        </ul>
        <button style={{float: "right", border: "none", marginBottom: "5%", position: "relative", bottom: "55px", height: "15px", width: "10px", fontSize: "20px", background: "none", cursor: "pointer"}} aria-label="Close"
        onClick={console.log("Close button has been clicked")}>
            <img src={closeIcon} width="15px" height="15px"/> 
        </button>
    </div>;
}

export default Notifications;
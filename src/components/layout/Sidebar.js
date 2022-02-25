import React from "react";
import{
 FaChevronDown,
FaInbox,
FaAccessibleIcon,
FaAd,
} from 'react-icons/fa'
export const Sidebar = () => ( 
<div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
        <li data-testid="inbox" className="inbox"><span><FaInbox/></span><span> Inbox</span></li>
        <li data-testid="today" className="today"><span><FaAd/></span><span>Today</span></li>
      <li data-testid="next_7" className="next_7"> <span><FaAccessibleIcon/></span><span>Next Week</span></li>
    </ul>
    <div className="sidebar__middle">
        <span><FaChevronDown/></span>
        <h2>projects</h2>
    </div>
   <ul className="sidebar__projects">Projects will be Here</ul>
   add project here
</div>

);
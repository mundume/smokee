import {FaPizzaSlice} from 'react-icons/fa'
import { FaSafari } from 'react-icons/fa';


export const Header = () => {
    const x = 1;
    
    return  <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <FaSafari/>
            </div>
            <div className="settings">
                <ul>
                    <li data-testid="quick-add-task-action" className='settings__add'>+</li>
                    <li data-testid="dark-mode-action"className='settings__darkmode'></li>
                    <li><FaPizzaSlice/></li>
                </ul>
            </div>
        </nav>
    </header>
       
    
} 

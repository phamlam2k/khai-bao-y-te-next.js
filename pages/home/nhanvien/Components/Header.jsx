import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = (props) => {
    
    return (
        <div className="header">
            <div className="header-content">
                <a href={`/home/nhanvien/${props.id}`}><img src={props.image} onClick={props.onReturnHome} alt="" className='img-header'/></a>
                <div className='user' onClick={props.onDropDown}>
                    <i className="far fa-user"></i>
                    <span style={{ flex : '1'}}>{props.name}</span>
                    <i className="fas fa-caret-down"></i>
                    <div className='log' onClick={props.onReturnLogin}>
                        <div className="logout" >
                            <div>Log out</div>
                            <div className='logout-icon'><i className="fas fa-sign-out-alt"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header

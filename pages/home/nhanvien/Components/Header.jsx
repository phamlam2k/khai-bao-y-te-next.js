import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import image from '../PictureOfHome/coollogo_com-25637877.png';

const Header = (props) => {
    
    return (
        <div className="header">
            <div className="header-content">
                <Link href={`/home/nhanvien/list`}>
                    <a>
                        <Image src={image} alt="" className='img-header'/>
                    </a>
                </Link>
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

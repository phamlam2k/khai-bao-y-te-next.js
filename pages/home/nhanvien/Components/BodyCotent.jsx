import React from 'react';
import { Link } from 'react-router-dom';
import image2 from '../PictureOfHome/Screenshot_70.png';
const BodyCotent = (props) => {

    const list = [
        {
            class : 'info',
            class_child : 'text-center',
            link : `/home/nhanvien/khaibaocanhan/${props.user.id}`,
            text : 'Khai báo cá nhân'
        },
        {
            class : 'info',
            class_child : 'text-center',
            link : `/home/nhanvien/khaibaodilai/${props.user.id}`,
            text : 'Khai báo đi lại'
        },
        {
            class : 'info',
            class_child : 'text-center',
            link : `/home/nhanvien/thongtinnhanvien/${props.user.id}`,
            text : 'Thông tin nhân viên'
        }
    ]

    console.log(props.user)

    return (
        <ul className="content">
            {
                list.map(
                    (li,index) =>

                    <li className={li.class} key={index}>
                        <Link to={li.link}>
                            <img src={image2} alt="" />
                            <h4 className={li.class_child}>{li.text}</h4>
                        </Link>
                    </li>

                )
            }
            
        </ul>
    )
}

export default BodyCotent;

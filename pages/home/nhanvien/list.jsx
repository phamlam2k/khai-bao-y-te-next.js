import React from 'react';
import Link from "next/link"
import Staff from '.';
const BodyCotent = (props) => {

    const list = [
        {
            class : 'info',
            class_child : 'text-center',
            link : `/home/nhanvien/khaibaocanhan`,
            text : 'Khai báo cá nhân'
        },
        {
            class : 'info',
            class_child : 'text-center',
            link : `/home/nhanvien/khaibaodilai`,
            text : 'Khai báo đi lại'
        },
        {
            class : 'info',
            class_child : 'text-center',
            link : `/home/nhanvien/thongtinnhanvien`,
            text : 'Thông tin nhân viên'
        }
    ]


    return (
        <Staff>
            <ul className="content">
                {
                    list.map(
                        (li,index) =>

                        <li className={li.class} key={index}>
                            <a href={li.link}>
                                <img src="" alt="" />
                                <h4 className={li.class_child}>{li.text}</h4>
                            </a>
                        </li>

                    )
                }
                
            </ul>

        </Staff>

    )
}

export default BodyCotent;

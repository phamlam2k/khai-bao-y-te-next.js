import React from 'react';
import Link from "next/link"
import Staff from '../index';
import Image from 'next/image';
import image from '../PictureOfHome/Screenshot_70.png'
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
    ]

    return (
        <Staff>
            <ul className="content">
                {
                    list.map(
                        (li,index) =>

                        <li className={li.class} key={index}>
                            <Link href={li.link}>
                                <a>
                                    <Image src={image} alt="" />
                                    <h4 className={li.class_child}>{li.text}</h4>
                                </a>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </Staff>

    )
}

export default BodyCotent;

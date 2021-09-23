import React from 'react';

const BannerHeader = () => {
    const text  = [
        {
            class : 'banner-content-top',
            h1 : 'Dập tắt covid',
            p1 : 'Các nhân viên ơi, hãy cùng điền thông tin' ,
            p2 : ' đầy đủ của mình nhé'
        },
        {
            class : 'banner-content-bottom',
            h1 : 'Bùng lên ý chí',
            p1 : 'Chúng ta sẽ cùng nhau cố gắng chống lại',
            p2:''

        }

    ]

    

    return (
        <div className='banner'>
            <div className='banner-child'>
                {
                    text.map(
                        (content,index) => 
                        <div className={content.class} key={index}>
                            <h1>{content.h1}</h1>
                            <p>{content.p1} <br/> {content.p2}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BannerHeader;

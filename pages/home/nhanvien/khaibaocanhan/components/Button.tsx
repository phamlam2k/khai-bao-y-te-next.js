import React from 'react'
interface Props{
    bgc: String
}
function Button(props: Props) {
    const {bgc} = props;
    return (
        <div className="button_container">
            <input type="submit" value="Gửi Tờ Khai" className={`${bgc}`}/>
        </div>
    )
}

export default Button

import React from 'react'
import { Link } from 'react-router-dom'


const InformationStaff = (props) => {

return (
    <div className='container bg-info-staff mt-5'>
        <div className='icon-back mb-3'>
            <Link to={`/home/nhanvien/${props.user.id}`}> <i className="fas fa-arrow-left"></i>
            </Link>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="card-staff">
                    <img className='img-card-staff pt-5'
                        src="https://forakyafrica-drilling.com/wp-content/uploads/2020/12/man-300x300-1.png" alt="" />
                    <h1 className='text-center mt-3'>{props.user.name}</h1>
                    <p className='text-center pb-5'>Nhân viên</p>
                </div>
            </div>
            <div className="col-md-8 info-staff pl-5">
                <h3 className='text-center'>Thông tin cá nhân</h3>
                <ul>

                    <li className='mt-5'>ID Nhân viên : {props.user.id}</li>
                    <li className='mt-5'>Name : {props.user.user.name}</li>
                    <li className='mt-5'>Email : {props.user.user.email}</li>
                    <li className='mt-5'>Cấp phép đi lại : {props.user.user.noteTravel}</li>
                </ul>

            </div>

        </div>

    </div>
)
}

export default InformationStaff
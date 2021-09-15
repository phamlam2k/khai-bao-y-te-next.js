import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Staff from '.'
import { useStaffContext } from '.';



const InformationStaff = () => {

    const user = useStaffContext();

    useEffect(() => {
        console.log(user)
    }, [user])
return (
    <Staff>
        <div className='container bg-info-staff mt-5'>
            <div className='icon-back mb-3'>
            <i className="fas fa-arrow-left"></i>
            
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card-staff">
                        <img className='img-card-staff pt-5'
                            src="https://forakyafrica-drilling.com/wp-content/uploads/2020/12/man-300x300-1.png" alt="" />
                        <h1 className='text-center mt-3'></h1>
                        <p className='text-center pb-5'>Nhân viên</p>
                    </div>
                </div>
                <div className="col-md-8 info-staff pl-5">
                    <h3 className='text-center'>Thông tin cá nhân</h3>
                    <ul>

                        <li className='mt-5'>ID Nhân viên : </li>
                        <li className='mt-5'>Name : </li>
                        <li className='mt-5'>Email : </li>
                        <li className='mt-5'>Cấp phép đi lại : </li>
                    </ul>

                </div>

            </div>

        </div>
    </Staff>
)
}

export default InformationStaff
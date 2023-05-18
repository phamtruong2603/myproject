import React, { useEffect, useState } from 'react';
import './ProfileMain.css';
import Avatar from '../Avatar/Avatar';
import { useParams } from 'react-router-dom';
import { memberData } from '../../api/testData';

const ProfileMain = () => {
  let { id } = useParams()
  const [data, setData] = useState();
  useEffect(() => {
    setData(...memberData.filter((value) => Number(id) === value.id))
  }, [])
  console.log(data)
  if (!data) return
  return (
    <div>
      <div className='ProfileMain'>
        <div className='ProfileMain_header'>
          <Avatar circle={'100px'} />
          <div className='ProfileMain_name'>
            <span>{data.name}</span>
            <span>{data.dateOfBirth || '01/01/1010'}</span>
          </div>
        </div>
      </div>

      <div className='ProfileMain'>
        <div className='PersionalInformation'>
          <div className='PersionalInformation_left'>
            <div className='PersionalInformation_detail'>
              <span>Name</span>
              <span>{data.userName || 'name'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Email</span>
              <span>{data.email || '...@gmail.com'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Contry</span>
              <span>{data.contry || 'Viet Nam'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Phone</span>
              <span>{data.phone || 'Lập trình hướng dịch vụ'}</span>
            </div>
          </div>
          <div className='PersionalInformation_right'>
            <div className='PersionalInformation_detail'>
              <span>Full Name</span>
              <span>{data.fullname || 'full name'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Phone</span>
              <span>{data.phone || '12345678'}</span>
            </div>
            <div className='PersionalInformation_detail'>
              <span>Date Of Birth</span>
              <span>{data.dateOfBirth || '01/01/1010'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileMain
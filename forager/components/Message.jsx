import React from 'react';
import {FaTimes } from 'react-icons/fa'
import '../styles/globals.css';
const Message = ({messageElement, isModal, setModal}) => {
    var hasIcon = false
    if(messageElement.icon!==''){
        hasIcon=true
    }
    var modalProp= isModal? "fixed inset-0 flex mr-4 ml-4 items-center justify-center backdrop-blur-sm  z-50":"" 
    return (
        <div className={`${modalProp} `}>
            <div className={`inline-flex mx-auto message rounded-3xl ${messageElement.color} text-sm w-full font-medium text-white px-4 py-4 mx-4`}>
                <div className='flex flex-col '> 
                    {isModal &&
                        <div className='ml-auto m-2'>
                            <FaTimes onClick={setModal} className="cursor-pointer text-gray-600 hover:text-gray-900" size={24} />
                        </div>}
                    <div className="header flex items-center pb-2">
                        {hasIcon&&(<>
                            <img width="27px" height="27px" className="" src={messageElement.icon}></img>
                        </>)}
                        <h1 className="uppercase text-2xl">{messageElement.header}</h1>
                    </div>
                <p >{messageElement.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
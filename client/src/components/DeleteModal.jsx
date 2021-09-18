import React from 'react'
import {useHttp} from "../hooks/http.hook"

const DeleteModal = ({onCancel, company}) => {

    const { request } = useHttp()

    const deleteCompanyHandler = async () => {
        try {
            const data = await request('/api/companies/delete', 'DELETE', { id: company._id})
            console.log(data.message)
            console.log()
            onCancel()
        } catch (e) {
        }
    }

    return (
        <div className={'modal__overlay'}>
            <div className={'modal__window deletemodal__window'}>
                <div className={'modal__header'}>
                    <div className={'modal__title'}>
                        Delete Company
                        <span onClick={onCancel}>&times;</span>
                    </div>
                </div>
                <div className={'modal__footer'}>
                    <button onClick={deleteCompanyHandler}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal
import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook"

const UpdateCompanyModal = ({onCancel, company}) => {

    const { request } = useHttp()

    const [form, setForm] = useState({
        image: company.image,
        name: company.name,
        href: company.href,
        anchorr: company.anchorr,
        description: company.description,
    })
    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const updateCompanyHandler = async () => {
        try {
            const data = await request('/api/companies/update', 'POST', {...form, id: company._id})
            console.log(data)
            onCancel()
        } catch (e) {
        }
    }


    return (
        <div className={'modal__overlay'}>
            <div className={'modal__window'}>
                <div className={'modal__header'}>
                    <div className={'modal__title'}>
                        Update Company
                        <span onClick={onCancel}>&times;</span>
                    </div>
                </div>
                <div className={'modal__body'}>
                    <input placeholder="Enter a link for the image"
                           id="image"
                           type="text"
                           name={"image"}
                           value={form.image}
                           onChange={formHandler}
                    />
                    <input placeholder="Description"
                           id="description"
                           type="text"
                           name={"description"}
                           value={form.description}
                           onChange={formHandler}
                    />
                    <input placeholder="Enter a name"
                           id="name"
                           type="text"
                           name={"name"}
                           value={form.name}
                           onChange={formHandler}
                    />
                    <input placeholder="Enter a link for the website"
                           id="href"
                           type="text"
                           name={"href"}
                           value={form.href}
                           onChange={formHandler}
                    />
                    <input placeholder="Enter an anchor"
                           id="anchorr"
                           type="text"
                           name={"anchorr"}
                           value={form.anchorr}
                           onChange={formHandler}
                    />
                </div>
                <div className={'modal__footer'}>
                    <button onClick={updateCompanyHandler}>Save updating</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateCompanyModal
import React, {useState} from 'react'
import {useHttp} from "../hooks/http.hook";
import {useAuth} from "../hooks/auth.hook";
import {NavLink, Redirect} from "react-router-dom";
import CompanyRemastering from "./CompanyRemastering"
import UpdateCompanyModal from "./UpdateCompanyModal";
import DeleteModal from "./DeleteModal";

const AdminPanel = ({companies}) => {

    const [isModalUpdate, setModalUpdate] = useState(false)
    const [isModalDelete, setModalDelete] = useState(false)
    const [companyForModal, setCompanyForModal] = useState({})
    const [form, setForm] = useState({
        image: '',
        name: '',
        href: ''
    })

    const {request} = useHttp()
    const {token, logout} = useAuth()

    const updateCompany = (company) => {
        setCompanyForModal(company)
        setModalUpdate(true)
    }

    const deleteCompany = (company) => {
        setCompanyForModal(company)
        setModalDelete(true)
    }

    const formHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const saveCompanyHandler = async () => {
        try {
            const data = await request('/api/companies/save', 'POST', {...form})
            console.log(data)
            setForm({
                image: '',
                name: '',
                href: '',
                anchorr: '',
                description: ''
            })
        } catch (e) {
        }
    }

    if (token === null) {
        return <Redirect to={'/admin'}/>
    }

    return (
        <div>
            {isModalUpdate && <UpdateCompanyModal onCancel={() => setModalUpdate(false)} company={companyForModal} />}
            {isModalDelete && <DeleteModal onCancel={() => setModalDelete(false)} company={companyForModal} />}
            {token && <div>
                <header className="header header__between">
                    <div className={"header__logo"}>Admin Panel</div>
                    <div>
                        <NavLink to={'/'}><button>Go to Companies List</button></NavLink>
                        <button onClick={logout}>Logout</button>
                    </div>
                </header>
                <div className={'content'}>
                    <div className={'admin-panel'}>
                        <h2>Add Company</h2>
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
                        <button onClick={saveCompanyHandler}>Save</button>
                    </div>
                    <div className={'admin-panel'}>
                        <h2>Delete or Update Company</h2>
                        <div>
                            {companies.map((company, idx) => <CompanyRemastering company={company}
                                                                                 idx={idx}
                                                                          deleteCompany={deleteCompany}
                                                                          updateCompany={updateCompany}/>)}
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default AdminPanel

import React, {useCallback, useEffect, useState} from 'react'
import './App.css'
import Content from "./pages/main/Content/Content"
import Auth from "./pages/admin/Auth/Auth"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {useHttp} from "./hooks/http.hook"
import AdminPanel from "./pages/admin/AdminPanel/AdminPanel"
import AboutItem from "./pages/about/AboutItem/AboutItem";
import Basket from "./pages/basket/Basket/Basket";


let fetchedCompanies = []

function App() {

    const [companies, setCompanies] = useState(fetchedCompanies)
    const [someShit, setSomeShit] = useState(false)
    const {request} = useHttp()

    const fetchCompanies = useCallback(async () => {
        const data = await request('/api/companies')
        fetchedCompanies = data
        setCompanies(data)
    }, [request])

    useEffect(() => {
        fetchCompanies()
    }, [fetchCompanies])

    const searchText = (e) => {
        let text = e.currentTarget.value.toUpperCase();
        let filterCompaniesN = fetchedCompanies.filter(s => s.name.toUpperCase().includes(text))
        let filterCompaniesD = fetchedCompanies.filter(s => {
            if (s.description) {
                return s.description.toUpperCase().includes(text)
            }
        })
        let filterCompanies = filterCompaniesN.concat(filterCompaniesD)
        if (text.trim().length === 0) {
            setCompanies(fetchedCompanies)
        } else {
            setCompanies(filterCompanies)
        }
    }

    return (
        <div>
            <BrowserRouter>
                    <div className={'app'}>
                        <Switch>
                            <Route exact path={"/"}
                                   render={() => <Content companies={companies}
                                                          searchText={searchText}
                                                          setSomeShit={setSomeShit}
                                                          someShit={someShit}
                                       />}
                            />
                            <Route exact path={"/about/:anchorr"}
                                   render={() => <AboutItem />}
                            />
                            <Route exact path={"/basket"}
                                   render={() => <Basket someShit={someShit} steSomeShit={setSomeShit}/>}
                            />
                            <Route exact path={"/admin"}
                                   render={() => <Auth/>}
                            />
                            <Route exact path={"/admin/panel"}
                                   render={() => <AdminPanel companies={companies} fetchCompanies={fetchCompanies}/>}
                            />
                        </Switch>
                    </div>
            </BrowserRouter>
        </div>
    )
}

export default App


import React, {useCallback, useEffect, useState} from 'react'
import './App.css'
import Content from "./components/Content"
import Auth from "./components/Auth"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {useHttp} from "./hooks/http.hook"
import AdminPanel from "./components/AdminPanel"
import {Snow} from "./components/Snow";
import {Banner} from "./components/Banner";
import Header from "./components/Header";


let fetchedCompanies = []

function App() {

    const [companies, setCompanies] = useState(fetchedCompanies)
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
        <div /*className={'banner__grid'}*/>
            {/*<Banner/>*/}
            <BrowserRouter>
                {/*<div className={'container'}>*/}
                    <div className={'app'}>
                        {/*<Snow/>*/}
                        {/*<Header searchText={searchText}/>*/}
                        <Switch>
                            <Route exact path={"/"}
                                   render={() => <Content companies={companies}
                                                          searchText={searchText}
                                       />}
                            />
                            <Route exact path={"/admin"}
                                   render={() => <Auth/>}
                            />
                            <Route exact path={"/admin/panel"}
                                   render={() => <AdminPanel companies={companies}/>}
                            />
                        </Switch>
                    </div>
                {/*</div>*/}
            </BrowserRouter>
             {/*<div className={'banner_right'}>*/}
             {/*</div>*/}
        </div>
    )
}

export default App


import React, {useEffect, useState} from 'react'
import Header from "./Header";
import CompaniesList from "./CompaniesList";
import {useLocation} from "react-router-dom";
import * as queryString from "querystring";

const Content = ({ searchText, companies}) => {

    const [gclid, setGclid] = useState('')

    const location = useLocation();

    useEffect(() => {
        const parsed = queryString.parse(location.search.substr(1));
        const { gclid } = parsed;
        console.log(gclid)
        setGclid(gclid);
    }, [])

    return (
        <div>
            <Header searchText={searchText}/>
            <div className={'content'}>
                <CompaniesList companies={companies} gclid={gclid}/>
            </div>
        </div>
    )
}

export default Content

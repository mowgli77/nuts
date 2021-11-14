import React from 'react'
import Header from "../../../components/Header/Header";
import CompaniesList from "../CompamiesList/CompaniesList";

const Content = ({ searchText, companies, pageY, setPageY, someShit, setSomeShit }) => {

    return (
        <div>
            <Header searchText={searchText} setPageY={setPageY} someShit={someShit}/>
            <div className={'content'}>
                <CompaniesList companies={companies}
                               pageY={pageY}
                               someShit={someShit}
                               setSomeShit={setSomeShit}
                               />
            </div>
        </div>
    )
}

export default Content

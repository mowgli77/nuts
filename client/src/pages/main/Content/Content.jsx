import React from 'react'
import Header from "../../../components/Header/Header";
import CompaniesList from "../CompamiesList/CompaniesList";

const Content = ({ searchText, companies, someShit, setSomeShit, getItemForAboutPage}) => {

    return (
        <div>
            <Header searchText={searchText} someShit={someShit}/>
            <div className={'content'}>
                <CompaniesList companies={companies}
                               someShit={someShit}
                               setSomeShit={setSomeShit}
                               getItemForAboutPage={getItemForAboutPage}
                               />
            </div>
        </div>
    )
}

export default Content
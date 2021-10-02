import React, {useEffect, useState} from 'react'
import CompaniesCard from "../CompaniesCard/CompaniesCard";

const CompaniesList = ({companies, someShit, setSomeShit}) => {
    const [sortItems, setSortItems] = useState(companies)
    const [priceMode, setPriceMode] = useState('')
    const [nameMode, setNameMode] = useState('')
    useEffect(() => {
        setSortItems(companies)
    }, [companies.length, companies[0]?.name])

    const sortByPrice = (mode) => setSortItems(prev => {
        setPriceMode(mode)
        return [...prev].sort((a, b) => mode === 'low' ? +a.price - +b.price : +b.price - +a.price)
    })
    const sortByName = (mode) => setSortItems(prev => {
        setNameMode(mode)
        return [...prev].sort((a, b) => {
            if (mode === 'abc') {
                return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
            }
            return a.name < b.name ? 1 : a.name > b.name ? -1 : 0
        })
    })

    return (
        <>
            <div className="companies__sort">
                <div className={priceMode === 'low' && 'companies__sort_active'}
                      onClick={() => sortByPrice('low')}
                >
                    Сначала дешевле
                </div>
                <div className={priceMode === 'high' && 'companies__sort_active'}
                    onClick={() => sortByPrice('high')}
                >
                    Сначала дороже
                </div>
                <div className={nameMode === 'abc' && 'companies__sort_active'}
                    onClick={() => sortByName('abc')}
                >
                    Сотрировать от А...
                </div>
                <div className={nameMode === 'zyx' && 'companies__sort_active'}
                    onClick={() => sortByName('zyx')}
                >
                    Сотрировать от Я...
                </div>
                <div onClick={() => {
                    setSortItems(companies)
                    setNameMode('')
                    setPriceMode('')
                }}>
                    Сбросить фильтры
                </div>
            </div>
            <div className={sortItems.length < 3 ? 'companies-list-less-then-3' : 'companies-list'}>
                {sortItems.map(company => <CompaniesCard key={company.id}
                                                         company={company}
                                                         someShit={someShit}
                                                         setSomeShit={setSomeShit}/>)}
            </div>
        </>
    )
}

export default CompaniesList

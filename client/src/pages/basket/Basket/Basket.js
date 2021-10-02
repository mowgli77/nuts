
const Basket = ({someShit, steSomeShit}) => {

    const getItems = () => {
        const items = localStorage.getItem('basket')
        const parsedItems = items ? JSON.parse(items) : {}
        return Object.values(parsedItems)
    }
    const items = getItems();

    const clearBasket = () => {
        localStorage.removeItem('basket')
        localStorage.removeItem('items')
        steSomeShit(!someShit)
    }

    return <div>
        {
            items.map(item => <div>
                <span>{item.name}: </span>
                <span>{item.price}</span>
                </div>)
        }
        <button onClick={clearBasket}>Clear basket</button>
    </div>
}

export default Basket

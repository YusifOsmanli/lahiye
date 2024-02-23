import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const basketContext = createContext(null)

const BasketProvider = ({ children }) => {
    const [basketItem, setBasketItem] = useState(localStorage.getItem("basketItem") ? JSON.parse(localStorage.getItem("basketItem")) : [])
    const [homeCounter, setHomeCounter] = useState(localStorage.getItem("counter") ? parseInt(localStorage.getItem("counter")) : 0)
    const [detailCount, setDetailCount] = useState(1)
    let [totalPrices, setTotalPrices] = useState(0)
    const addToBasket = (item) => {
        let target = basketItem.find((prod) => prod._id === item._id);

        if (!target) {

            let newItem = { ...item, count: 1, totalPrice: item.satis};
            setBasketItem([...basketItem, newItem]);
            setHomeCounter(homeCounter + 1);
            localStorage.setItem("counter", homeCounter + 1);
            toast.success(`Added ${item.title} to the basket`);
        } else {
            let updatedItem = { ...target, count: target.count + 1, totalPrice: (item.satis) * (target.count + 1) };
            setBasketItem([...basketItem.filter((prod) => prod._id !== item._id), updatedItem]);
            setHomeCounter(homeCounter + 1);
            localStorage.setItem("counter", homeCounter + 1);
            toast.success(`Added one more ${item.title} to the basket`);
        }
    };

    const addToBasketInDetail = (item) => {
        let target = basketItem.find((prod) => prod._id === item._id);

        if (!target) {

            let newItem = { ...item, count: detailCount, totalPrice: (item.price / 2) * detailCount };
            setBasketItem([...basketItem, newItem]);
            setHomeCounter(homeCounter + detailCount);
            localStorage.setItem("counter", homeCounter + detailCount);
            toast.success(`Added ${item.title} to the basket`);
            setDetailCount(1)
        } else {
            let updatedItem = { ...target, count: target.count + detailCount, totalPrice: (item.price / 2) * (target.count + detailCount) };
            setBasketItem([...basketItem.filter((prod) => prod._id !== item._id), updatedItem]);
            setHomeCounter(homeCounter + detailCount);
            localStorage.setItem("counter", homeCounter + detailCount);
            toast.success(`Added ${detailCount} more ${item.title} to the basket`);
            setDetailCount(1)

        }
    };
    const handleIncrease = () => {
        setDetailCount(detailCount + 1)
    }
    const handleDecrease = () => {
        setDetailCount(detailCount - 1)
    }


    const hanldeBasketIncrease = (item) => {
        let target = basketItem.find((prod) => prod.id === item.id);
        if (target) {
            let updatedBasket = [...basketItem];
            target.count += 1;
            target.totalPrice = (item.price / 2) * target.count;

            setBasketItem(updatedBasket);
            setHomeCounter(homeCounter + 1);
            localStorage.setItem("counter", homeCounter + 1);
            toast.success(`${item.title} Item Increased`);
            localStorage.setItem("basketItem", JSON.stringify(updatedBasket));
        }
    };

    const hanldeBasketDecrease = (item) => {
        let target = basketItem.find((prod) => prod.id === item.id);
        if (target) {
            let updatedBasket = [...basketItem];
            target.count -= 1;
            target.totalPrice = (item.price / 2) * target.count;

            setBasketItem(updatedBasket);
            setHomeCounter(homeCounter - 1);
            localStorage.setItem("counter", homeCounter - 1);
            toast.success(`${item.title} Item Decreased`);
            localStorage.setItem("basketItem", JSON.stringify(updatedBasket));
        }

    };

    const handleDelete = (item) => {
        let target = basketItem.find(element => element.id == item.id)
        let indexOfTarget = basketItem.indexOf(target)
        basketItem.splice(indexOfTarget, 1)
        setHomeCounter(homeCounter - item.count)
        localStorage.setItem("counter", homeCounter - item.count)
        setBasketItem([...basketItem])
    }


    useEffect(() => {
        localStorage.setItem("basketItem", JSON.stringify(basketItem))


    }, [basketItem, setBasketItem])

    useEffect(() => {
        let basket = JSON.parse(localStorage.getItem("basketItem"))
        let sum = 0
        basket.forEach((element) => {
            sum += element.totalPrice
        })
        setTotalPrices(sum)
    }, [basketItem, setBasketItem])

    const values = {
        basketItem, setBasketItem, homeCounter, setHomeCounter, detailCount, setDetailCount, handleDecrease, handleIncrease, addToBasket, addToBasketInDetail,
        hanldeBasketIncrease, hanldeBasketDecrease, totalPrices, handleDelete
    }

    return <basketContext.Provider value={values}>{children}</basketContext.Provider>
}


export { basketContext, BasketProvider }
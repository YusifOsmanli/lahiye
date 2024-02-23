const publishKey="pk_test_51On2fIGpqOoXP0ZVyL694r9l4LAtnyTp58pmrnbL95bTIyiZHJUA6jIfd4vUh6BXk844PSU3DHF4fWUHQQAgy03w00iBLfVNtG"
  // const createOrder = (items, totalPrice) => {
  //     axios.post("http://localhost:3000/orders", { items: items, totalPrice: totalPrice, status: "pending" }).then(res => {
  //         console.log(res)
  //     })
  // }

  const handleCheckOut= async()=>{
      const productsContent={
          products:User.basket
      }
      const stripe= await loadStripe(publishKey)


    const res = await axios.post(`http:localhost:7070/payment`, productsContent);
  //   console.log(res.)
  //   if (!res.ok) {
  //     console.log("Ödeme işlemi başarısız oldu.");
  //   }
  //   const session = await res.data.json();

    const result = await stripe.redirectToCheckout({
      sessionId: res.data.id,
    });
 console.log(result)
    if (result.error) {
      throw new Error(result.error.message);
    }
  }
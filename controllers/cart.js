import Cart from '../models/cart.js'

export const createCartItem = async (req, res) => {
  try {
    const { Name, ItemImage, ItemCount, ItemPrice, Total, Discount } = req.body
    const newCartItem = new Cart({
      Name,
      ItemImage,
      ItemCount,
      ItemPrice,
      Total,
      Discount,
    })
    await newCartItem.save()
    res.json(newCartItem)
  } catch (error) {
    res.json({ message: 'Что-то пошло не так.' })
  }
}


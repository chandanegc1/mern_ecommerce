import Products from "../module/Products.js";
import Cart from "../module/cart.js";
import Register from "../module/Registration.js";

export const allProduct = async (req, res) => {
  try {
    const productItem = await Products.find();
    res.send(productItem);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const postProduct = async (req, res) => {
  try {
    const { name, img, brand, price } = req.body;
    const productData = new Products({ name, img, brand, price });
    const savedata = await productData.save();
    res.status(200).json({
      success: true,
      savedata,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const cartData = async (req, res) => {
  try {
    const cartitem = await Cart.find();
    res.status(200).send(cartitem);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const postCartData = async (req, res) => {
  try {
    const { name, img, brand, price } = req.body;
    const CartData = new Cart({ name, img, brand, price });
    const savedata = await CartData.save();
    res.status(200).json({
      success: true,
      savedata,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Cart.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        error: "Item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const allUsers = async (req, res) => {
  try {
    const allUser = await Register.find();
    res.status(200).send(allUser);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userRegister = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;
    const register = new Register({ fullname, email, phone, password });
    const savedata = await register.save();
    res.status(200).send(savedata);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUserPrfl = async (req, res) => {
  try {
    const user = await Register.findOneAndUpdate({email:req.params.id});
    if(!user){
        res.status(404).json({
            success: false,
            message: "user does not exist",
          });
    }
    const { fullname, email, password , phone } = req.body;
    if (fullname) {
      user.fullname = fullname;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }
    if (phone) {
      user.phone = phone;
    }

    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).json({
        success: false,
        message: error.message,
      });
  }
};
// export const addToCart = async (req , res)=>{
//     try {
//         const post = await Products.findById(req.params.id);
//         if (post.Cart.includes(req.user._id)) {
//             const index = post.likes.indexOf(req.user._id);

//             post.likes.splice(index, 1);
//             await post.save();
//     } catch (error) {

//     }
// }

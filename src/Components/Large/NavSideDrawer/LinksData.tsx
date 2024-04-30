import { BiSolidDish } from "react-icons/bi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { TbReport } from "react-icons/tb";

export const Links =[
    {
        id: 1 ,
        icon :<BiSolidDish size={20}/>,
        path: "/Menu",


    },
    {
        id:2,
        icon:<TbShoppingBagPlus size={20}/>,
        path: "/Inventory",

    },
    {
        id:3,
        icon:<TbReport size={20}/>,
        path :"/DashBoard"
    }
]
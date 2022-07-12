
import {AiOutlineHome, AiOutlineDollar} from "react-icons/ai"
import {GiTakeMyMoney} from "react-icons/gi"
import  { FcNews} from "react-icons/fc"

export const MenuDta = [
    {
    id : 1,
    name : "Home",
    url : "",
    icon : <AiOutlineHome />,
    color : "pink"  
},

{
    id : 2,
    name : "CryptoCurrencies",
    url : `CryptoCurrencies`, 
    icon : <AiOutlineDollar />,
    color : "red"  
},

{
    id : 3,
    name : "Exchanges",
    url : `Exchange`,
    icon : <GiTakeMyMoney />,
    color : "orange"   
},

{
    id : 4,
    name : "News",
    url : `News`,
    icon : <FcNews />,
    color : "orange"   
},
]
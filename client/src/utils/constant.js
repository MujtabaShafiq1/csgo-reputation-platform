import LogoIcon from "../assests/icons/logo.png"
import ListIcon from "../assests/icons/list.png"
import Weapons from "../assests/weapons.png"

import SendIcon from "../assests/icons/send.png"
import ArrowIcon from "../assests/icons/arrow.png"
import DashIcon from "../assests/icons/dash.png"
import UserIcon from "../assests/icons/user.png"

import SteamIcon from "../assests/icons/steam.png"
import HandshakeIcon from "../assests/icons/handshake.png"

import PositiveIcon from "../assests/icons/positive.png"
import NeturalIcon from "../assests/icons/neutral.png"

import ItemSaleIcon from "../assests/icons/item_sale.png"
import ItemPurchaseIcon from "../assests/icons/item_purchase.png"
import BalanceSaleIcon from "../assests/icons/balance_sale.png"
import BalancePurchaseIcon from "../assests/icons/balance_purchase.png"
import MiddlemanIcon from "../assests/icons/middleman.png"

import CsgoIcon from "../assests/icons/csgo.png"
import DotaIcon from "../assests/icons/dota.png"
import Tf2Icon from "../assests/icons/tf2.png"
import H1Z1Icon from "../assests/icons/z1.png"

import TradefirstIcon from "../assests/icons/trade_first.png"
import TradesecondIcon from "../assests/icons/trade_second.png"

import BtcIcon from "../assests/icons/btc.png"
import EthIcon from "../assests/icons/eth.png"
import LtcIcon from "../assests/icons/ltc.png"
import UsdtIcon from "../assests/icons/usdt.png"
import PaypalIcon from "../assests/icons/paypal.png"
import CashappIcon from "../assests/icons/cashapp.png"
import VenmoIcon from "../assests/icons/venmo.png"
import ZelleIcon from "../assests/icons/zelle.png"
import SwishIcon from "../assests/icons/swish.png"
import CashIcon from "../assests/icons/cash.png"
import BankIcon from "../assests/icons/bank.png"

import CrossIcon from "../assests/icons/cross.png"
import BalanceIcon from "../assests/icons/buff.png"

export const searchFilters = [
    {icon: CrossIcon, value: "" , type: "", text: []},
    {icon: BalanceIcon,  value: "Balance", type:"type" ,text: ["Sold balance" , "Bought balance"]},
    {icon: BtcIcon, value: "Cyrpto", type:"method" , text:[ "bitcoin" , "ethereum" ,"litecoin" ,"USDT" ,]},
    {icon: CashIcon, value: "Cash" , type:"method" , text: [ "PayPal" , "Cash APP",  "venmo" , "zelle", "swish", "cash" , "bank wire"]},
]
export const sortFilers = [
    {index: 0, value: "date ascending" , text: "createdAt" , type: 1},
    {index: 1,value: "date descending" , text: "createdAt" , type: -1},
    {index: 2,value: "price ascending" , text: "amount" , type: 1},
    {index: 3,value: "price descending" , text: "amount" , type: -1},
]


export const categories = [
    { name: 'Positive', icon: PositiveIcon, text: "Positive" , type: "rate"},
    { name: 'Neutral', icon: NeturalIcon, text: "Neutral" , type: "rate" },
    { name: 'Sold', icon: ItemSaleIcon , text: "Item sale" , type: "type" },
    { name: 'Bought', icon: ItemPurchaseIcon , text: "Item purchase" , type: "type" },
    { name: 'Sold balance', icon: BalanceSaleIcon , text: "Balance sale" , type: "type" },
    { name: 'Bought balance', icon: BalancePurchaseIcon , text: "Balance purchase" , type: "type" },
    { name: 'Assisted trade of', icon: MiddlemanIcon , text: "Middleman" , type: "type" },
    { name: 'CS:GO item', icon: CsgoIcon , text: "CS:GO" , type: "game" },
    { name: 'DOTA2 item', icon: DotaIcon , text: "DOTA2" , type: "game" },
    { name: 'TF2 item', icon: Tf2Icon , text: "TF2" , type: "game" },
    { name: 'Z1 item', icon: H1Z1Icon , text: "Z1" , type: "game" },
    { name: "first", icon: TradefirstIcon , text: "I went first" , type: "order" },
    { name: "second", icon: TradesecondIcon , text: "I went second" , type: "order" },
    { name: 'bitcoin', icon: BtcIcon , text: "BTC" , type: "method" },
    { name: 'ethereum', icon: EthIcon , text: "ETH" , type: "method" },
    { name: 'litecoin', icon: LtcIcon , text: "LTC" , type: "method" },
    { name: 'USDT', icon: UsdtIcon , text: "USDT" , type: "method" },
    { name: 'PayPal', icon: PaypalIcon , text: "Paypal" , type: "method" },
    { name: 'Cash APP', icon: CashappIcon , text: "CASH APP" , type: "method" },
    { name: 'venmo', icon: VenmoIcon , text: "Venmo" , type: "method" },
    { name: 'zelle', icon: ZelleIcon , text: "Zelle" , type: "method", },
    { name: 'swish', icon: SwishIcon , text: "Swish" , type: "method", },
    { name: 'cash', icon: CashIcon , text: "Cash" , type: "method", },
    { name: 'bank wire', icon: BankIcon , text: "Bank" , type: "method", },
];

export {LogoIcon, SendIcon, ArrowIcon, DashIcon, UserIcon, SteamIcon, HandshakeIcon , Weapons , ListIcon, CrossIcon};
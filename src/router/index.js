import Vue from 'vue'
import Router from 'vue-router'
import BaseLayOut from '@/base/BaseLayOut'
import Header from '@/common/Header'
import LoginForm from '@/common/LoginForm'
import Banner from '@/common/Banner'
import Wrapper from '@/common/Wrapper'
import Footer from '@/common/Footer'
import FloatBanner from '@/common/FloatBanner'
import Carousel from '@/components/Carousel'
import SIdentify from '@/components/SIdentify'
import PopUp from '@/components/PopUp'
import Navigator from '@/common/Navigator'
import Welcome from '@/components/Welcome'
import NavMenu from '@/components/NavMenu'
import ContentIndex from '@/components/ContentIndex'
import ContentInner from '@/components/ContentInner'
import HotNews from '@/components/HotNews'

import Home from '@/layouts/Home'
import VIP from '@/layouts/VIP'
import Partner from '@/layouts/Partner'
import Payment from '@/layouts/Payment'
import Question from '@/layouts/Question'
import Cooperation from '@/layouts/Cooperation'
import Activity from '@/layouts/Activity'
import Member from '@/layouts/Member'
// import Game from '@/layouts/games/Game'
// import GameBrand from '@/layouts/games/GameBrand'
import GameAll from '@/layouts/games/GameAll'
import GameBBIN from '@/layouts/games/GameBBIN'
import GameMG from '@/layouts/games/GameMG'
import GameGNS from '@/layouts/games/GameGNS'
import GameISB from '@/layouts/games/GameISB'
import GameAG from '@/layouts/games/GameAG'
import GameJDB from '@/layouts/games/GameJDB'
import GameHB from '@/layouts/games/GameHB'
import GameSG from '@/layouts/games/GameSG'
import GameCQ9 from '@/layouts/games/GameCQ9'
import GameDMG from '@/layouts/games/GameDMG'
import GameRT from '@/layouts/games/GameRT'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'BaseLayOut',
        component: BaseLayOut
    }, 
    {
        path: '/',
        name: 'Header',
        component: Header
    },
    {
        path: '/',
        name: 'Banner',
        component: Banner
    },
    {
        path: '/',
        name: 'Wrapper',
        component: Wrapper
    },
    {
        path: '/',
        name: 'HotNews',
        component: HotNews
    },
    {
        path: '/',
        name: 'ContentIndex',
        component: ContentIndex
    },
    {
        path: '/',
        name: 'ContentInner',
        component: ContentInner
    },
    {
        path: '/',
        name: 'Footer',
        component: Footer
    },
    {
        path: '/',
        name: 'FloatBanner',
        component: FloatBanner
    },
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/',
        name: 'NavMenu',
        component: NavMenu
    },
    {
        path: '/',
        name: 'Navigator',
        component: Navigator
    },
    {
        path: '/',
        name: 'Carousel',
        component: Carousel
    },
    {
        path: '/',
        name: 'LoginForm',
        component: LoginForm
    },
    {
        path: '/',
        name: 'SIdentify',
        component: SIdentify
    },
    {
        path: '/',
        name: 'PopUp',
        component: PopUp
    },
    // {
    //     path: '/Game',
    //     name: 'Game',
    //     alias: '/Game',
    //     component: Game,
    //     children: [
    //         {
    //         path: '/Game/:id',
    //         name: 'GameBrand',
    //         component: GameBrand
    //         }
    //     ]
    // },
    // {
    //     path: '/',
    //     name: 'GameContent01',
    //     component: GameContent01
    // },
    // {
    //     path: '/',
    //     name: 'GameContent02',
    //     component: GameContent02
    // },
    // {
    //     path: '/',
    //     name: 'GameContent03',
    //     component: GameContent03
    // },
    // {
    //     path: '/',
    //     name: 'GameContent04',
    //     component: GameContent04
    // },
    {
        path: '/GameAll',
        name: 'GameAll',
        component: GameAll
    },
    {
        path: '/GameBBIN',
        name: 'GameBBIN',
        component: GameBBIN
    },
    {
        path: '/GameMG',
        name: 'GameMG',
        component: GameMG
    },
    {
        path: '/GameGNS',
        name: 'GameGNS',
        component: GameGNS
    },
    {
        path: '/GameISB',
        name: 'GameISB',
        component: GameISB
    },
    {
        path: '/GameAG',
        name: 'GameAG',
        component: GameAG
    },
    {
        path: '/GameJDB',
        name: 'GameJDB',
        component: GameJDB
    },
    {
        path: '/GameHB',
        name: 'GameHB',
        component: GameHB
    },
    {
        path: '/GameSG',
        name: 'GameSG',
        component: GameSG
    },
    {
        path: '/GameCQ9',
        name: 'GameCQ9',
        component: GameCQ9
    },
    {
        path: '/GameDMG',
        name: 'GameDMG',
        component: GameDMG
    },
    {
        path: '/GameRT',
        name: 'GameRT',
        component: GameRT
    },
    {
        path: '/VIP',
        name: 'VIP',
        component: VIP
    },
    {
        path: '/Partner',
        name: 'Partner',
        component: Partner
    },
    {
        path: '/Payment',
        name: 'Payment',
        component: Payment
    },
    {
        path: '/Question',
        name: 'Question',
        component: Question
    },
    {
        path: '/Cooperation',
        name: 'Cooperation',
        component: Cooperation
    },
    {
        path: '/Activity',
        name: 'Activity',
        component: Activity
    },
    {
        path: '/Member',
        name: 'Member',
        component: Member
    }]
})
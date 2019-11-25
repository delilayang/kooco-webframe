import Vue from 'vue'
import Router from 'vue-router'
import GameContent01 from '@/components/tabcomponents/GameContent01'
import GameContent02 from '@/components/tabcomponents/GameContent02'
import GameContent03 from '@/components/tabcomponents/GameContent03'
import GameContent04 from '@/components/tabcomponents/GameContent04'
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
    routes: [
    {
        path: '/',
        name: 'GameContent01',
        component: GameContent01
    },
    {
        path: '/',
        name: 'GameContent02',
        component: GameContent02
    },
    {
        path: '/',
        name: 'GameContent03',
        component: GameContent03
    },
    {
        path: '/',
        name: 'GameContent04',
        component: GameContent04
    },
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
    ]
})
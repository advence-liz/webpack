import TreePage from 'pages/tree-page'
import appointment from 'pages/appointment'
import Home from 'pages/home'
import ComplaintPage from 'pages/complaint'

const Routers = []

Routers.push({ path: '/', component: Home })
Routers.push({ path: '/tree-page', component: TreePage })
Routers.push({ path: '/appointment', component: appointment })
Routers.push({ path: '/complaint', component: ComplaintPage })
export default Routers

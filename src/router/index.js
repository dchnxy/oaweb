import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/houTai',
        name: 'houTai',
        component: () => import('../views/admin/hou_tai.vue'),
        children: [
            //订单管理查询
            {
                path: '/tOrdersIndex',
                name: 'tOrdersIndex',
                component: () => import('../views/dch/orders/tOrders_index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
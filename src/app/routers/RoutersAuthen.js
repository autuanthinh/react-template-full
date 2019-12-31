import asyncComponent from 'app/components/_base/asyncComponent';

const AsyncHome = asyncComponent(() => import('app/containers/Home'));
const AsyncAbout = asyncComponent(() => import('app/containers/About'));
const AsyncCatagories = asyncComponent(() => import('app/containers/Categories'));
const AsyncProducts = asyncComponent(() => import('app/containers/Products'));
const AsyncMyComApi = asyncComponent(() => import('app/containers/myComApi'));

const routersAuthen = [
    {
        title: 'Home',
        path: '/',
        component: AsyncHome,
        exact: true,
    },
    {
        title: 'About',
        path: '/about',
        component: AsyncAbout,
    },
    {
        title: 'Categories',
        path: '/categories',
        component: AsyncCatagories,
    },
    {
        title: 'Products',
        path: '/products',
        component: AsyncProducts,
    },
    {
        title: 'Reddit api',
        path: '/mycomapi',
        component: AsyncMyComApi,
    },
];

export default routersAuthen;

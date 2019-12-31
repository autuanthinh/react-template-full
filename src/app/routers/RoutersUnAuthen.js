import Login from 'app/containers/_unAuthen/login';
import ResetPass from 'app/containers/_unAuthen/resetPass';
import SignUp from 'app/containers/_unAuthen/signUp';

const routersUnAuthen = [
    {
        title: 'Login',
        path: '/login',
        component: Login,
        exact: true,
    },
    {
        title: 'Sign up',
        path: '/signup',
        component: SignUp,
    },
    {
        title: 'Reset pass',
        path: '/resetpass',
        component: ResetPass,
    },
];

export default routersUnAuthen;

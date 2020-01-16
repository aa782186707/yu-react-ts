
import { ReactLoadable } from "@/component/ReactLoadable/lazyLoad.jsx";
export type IRoute = {
    path: string,
    exact?: boolean,
    name: string,
    icon?: string,
    comp?: any,
    subRoutes?: Array<IRoute>,
    redirect?:string
}

export const routes: Array<IRoute> = [
    {
        path: '/',
        exact: true,
        name: '',
        redirect:'/index',
        icon: 'home',
        subRoutes: [
            {
                path: 'index',
                name: '主页',
                exact: true,
                comp: ReactLoadable(() => import('../view/index/Index')),
            }
        ]
    }
];
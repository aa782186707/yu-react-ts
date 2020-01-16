import React from 'react'
let { Consumer, Provider } = React.createContext(null, undefined);//创建 context 并暴露Consumer和Provider模式
export {
    Consumer,
    Provider
}

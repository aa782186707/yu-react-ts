import * as React from 'react'
import { inject } from 'mobx-react'
import { FirstData } from '../../store/CommonData/firstData'

@inject((store: { FirstData: FirstData }) => {
    return {
        firstStr: store.FirstData.firstStr,
        changeFirstStr: store.FirstData.changeFirstStr
    }
})
export default class Goods extends React.Component<any, any>{
    render() {
        const { firstStr } = this.props
        return (
            { firstStr }
        )
    }
}
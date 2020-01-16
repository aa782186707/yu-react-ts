import * as React from 'react'
import { observer } from 'mobx-react'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
@observer
export default class Index extends React.Component<any, any>{
    componentDidMount() { }
    render() {
        return (
            <div className="btn-group">
                hello
                <Button variant="contained" color="primary">
                    你好，世界
                    </Button>
                <Checkbox defaultChecked />
            </div>
        )
    }
}
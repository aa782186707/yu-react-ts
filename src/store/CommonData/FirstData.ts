import { observable, action } from 'mobx';
class FirstData {
    @observable public firstStr: string = 'firstStr';
    @action
    public changeFirstStr = (str:string) => {
        this.firstStr = str
    }
}
export {FirstData}
export default new FirstData()
import { observable, action } from 'mobx';
class SecondData {
    @observable public secondStr: string = 'firstStr';
    @action
    public changeSecondStr = (str: string) => {
        this.secondStr = str
    }
}
export default new SecondData()
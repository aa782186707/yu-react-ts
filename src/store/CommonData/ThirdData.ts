import { observable, action } from 'mobx';
class ThirdData {
    @observable public thirdStr: string = 'firstStr';
    @action
    public changeThirdStr = (str: string) => {
        this.thirdStr = str
    }
}
export default new ThirdData()
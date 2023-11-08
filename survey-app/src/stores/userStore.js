import { action, makeObservable, observable } from 'mobx';

class UserStore {
  @observable fio = '';

  constructor() {
    makeObservable(this);
  }

  @action setFio(value) {
    this.fio = value;
  }

  @action reset() {
    this.fio = '';
  }
}
export default new UserStore();

export default class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }
  getItem(key, defaultValue) {
    return JSON.parse(this.storage.getItem(key)) ?? defaultValue;
  }
  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}

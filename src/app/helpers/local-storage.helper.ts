type Key = 'userId';

export class LocalStorage {
  public static set<T>(key: Key, value: T): void {
    const string = JSON.stringify(value);

    return localStorage.setItem(key, string);
  }

  public static get<T>(key: Key): T | null {
    const string = localStorage.getItem(key);

    return string && JSON.parse(string);
  }
}

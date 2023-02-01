export class User {
  constructor(name, rights = []) {
    this.name = name;
    this.rights = rights;
  }

  write () {
    return "write something to repo";
  }
}

export class ProxyUser {
  constructor() {
    // todo: add implementation
  }

  write () {
    // todo: add implementation
  }
}



# Proxy

> Allows you to substitute special
> substitute objects.

- Type: Structural
- Complexity: ⭐⭐ 

Imagine that you are implementing a system of user access to
Web-application resources. The system already has a class `User` with method
write` method, which allows objects of that class to write to the
repository.

At some point, you needed to restrict the user's
to write to the repository. Now only users with administrator privileges
have write access.

But here's the problem, the system architect has forbidden changes to the
`User` class.

It's good that you are familiar with the "Proxy" pattern, which will allow you to bypass this
limitation by calling the user object through a proxy object
through the proxy object.

Please implement the constructor logic and the `write` method of
proxyUser' class, so that only users with administrator privileges
have write access to the repository.

```js

const user = new User("John", ["member"]);
const proxy = new ProxyUser(user);

proxy.write(); // "user does not have permissions to write"
```
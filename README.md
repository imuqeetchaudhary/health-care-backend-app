# Health Care Backend App RestApi

---

## Routes for User Auth

### to register a user

- user/register :post :protected

```js
{
    email: String(*),
    password: String(*),
    displayName: String(*),
}
```

### to login a user

- user/login :post :protected

```js
{
    email: String(*),
    password: String(*),
}
```

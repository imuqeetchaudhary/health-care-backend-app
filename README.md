# Health Care Backend App RestApi

---

## Routes for User Auth

### to register a user

- user/register :post :protected

```js
{
    email: String,
    password: String,
    displayName: String,
}
```

### to login a user

- user/login :post :protected

```js
{
    email: String,
    password: String,
}
```

### to get user profile

- user/profile :get :protected

### to get all users

- user/get-all :get :protected

### to get a single user

- user/get/:id: :get :protected

## Routes for Roles

### to create a new role

- role/create :post :protected

```js
{
    description: String,
}
```

### to get all roles

- role/get-all :get :protected

### to get single role

- role/get/:id: :get :protected

### to delete a single role

- role/delete/:id: :delete :protected

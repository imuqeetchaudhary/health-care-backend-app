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

## Routes for menu

### to create a new menu

- menu/create :post :protected

```js
{
    description: String,
    link: String,
    icon: String,
    parentId: Number,
}
```

### to get all menu

- menu/get-all :get :protected

### to get single menu

- menu/get/:id: :get :protected

### to delete a single menu

- menu/delete/:id: :delete :protected

## Routes for Menu Access Roles

### to create a menu access roles

- menu-access-roles/create :post :protected

```js
{
    roleId: Number,
    menuIds: Number[],
}
```

### to get all menus for a specific role

- menu-access-roles/get-all/:id: :get :protected (where id = roleId)

## Routes for User Access Roles

### to create a user access roles

- user-access-roles/create :post :protected

```js
{
    userId: Number,
    roleIds: Number[],
}
```

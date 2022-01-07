# Health Care Backend App RestApi

---

# User Management System

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

## Routes for Menu Category

### to create a new menu category

- menu-category/create :post :protected

```js
{
    description: String,
}
```

### to get all menu category

- menu-category/get-all :get :protected

### to get single menu category

- menu-category/get/:id: :get :protected

### to delete a single menu category

- menu-category/delete/:id: :delete :protected

## Routes for Menu

### to create a new menu

- menu/create :post :protected

```js
{
    description: String,
    link: String,
    icon: String,
    parentId: Number,
    categoryId: Number,
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

### to get all menu access roles

- menu-access-roles/get-all/ :get :protected

### to get all assigned menus for a specific role

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

### to get all user access roles

- user-access-roles/get-all/ :get :protected

### to get all assigned roles for a specific user

- user-access-roles/get-all/:id: :get :protected (where id = userId)

---

# Hospital Management System

## Routes for Hospital

### to create a new hospital

- hospital/create :post :protected

```js
{
    hospitalName: String,
    openingHours: String,
    maxDoctors: Number,
    maxPatients: Number,
    maxDepartments: Number,
    city: String,
    country: String,
    area: String,
    postalCode: String,
    phoneNo: String,
    email: String,
    status: String,
}
```

### to upload image

- hospital/upload/:id: :patch :protected

```js
{
    image: String, //as a form data
}
```

### to get all hospital

- hospital/get-all :get :protected

### to get single hospital

- hospital/get/:id: :get :protected

### to update a new hospital

- hospital/update/:id: :patch :protected

```js
{
    hospitalName: String,
    openingHours: String,
    maxDoctors: Number,
    maxPatients: Number,
    maxDepartments: Number,
    city: String,
    country: String,
    area: String,
    postalCode: String,
    phoneNo: String,
    email: String,
    status: String,
}
```

### to delete a single hospital

- hospital/delete/:id: :delete :protected

## Routes for department

### to create a new department

- department/create :post :protected

```js
{
    departmentName: String,
    maxDoctors: Number,
    maxPatients: Number,
    phoneNo: String,
    email: String,
    status: String,
    hospitalId: Number

}
```

### to get all department

- department/get-all :get :protected

### to get single department

- department/get/:id: :get :protected

### to update a new department

- department/update/:id: :patch :protected

```js
{
    departmentName: String,
    maxDoctors: Number,
    maxPatients: Number,
    phoneNo: String,
    email: String,
    status: String,
    hospitalId: Number
}
```

### to delete a single department

- department/delete/:id: :delete :protected

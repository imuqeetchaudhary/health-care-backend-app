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
    isAdmin: Boolean,
    isSuperuser: Boolean,
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
    adminId: Number,
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

### to update a hospital

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

### to upload image

- department/upload/:id: :patch :protected

```js
{
    image: String, //as a form data
}
```

### to get all department

- department/get-all :get :protected

### to get single department

- department/get/:id: :get :protected

### to update a department

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

## Routes for Doctor

### to create a new doctor

- doctor/create :post :protected

```js
{
    fee: Number,
    experience: Number,
    isAvailable: Boolean,
    availablityDays: String,
    activeHours: String,
    userId: Number,

}
```

### to get all doctor

- doctor/get-all :get :protected

### to get single doctor

- doctor/get/:id: :get :protected

### to update a doctor

- doctor/update/:id: :patch :protected

```js
{
    fee: Number,
    experience: Number,
    isAvailable: Boolean,
    availablityDays: String,
    activeHours: String,
    userId: Number,
}
```

### to delete a single doctor

- doctor/delete/:id: :delete :protected

## Routes for Dr in Depart

### to create a new dr in depart

- dr-in-depart/create :post :protected

```js
{
    departmentId: Number,
    doctorId: Number,
}
```

### to get all dr in depart

- dr-in-depart/get-all :get :protected

### to get single dr in depart

- dr-in-depart/get/:id: :get :protected

### to update a dr in depart

- dr-in-depart/update/:id: :patch :protected

```js
{
    departmentId: Number,
    doctorId: Number,
}
```

### to delete a single dr in depart

- dr-in-depart/delete/:id: :delete :protected

## Routes for Qualification

### to create a new qualification

- qualification/create :post :protected

```js
{
    details: String,
    doctorId: Number,
}
```

### to get all qualification

- qualification/get-all :get :protected

### to get single qualification

- qualification/get/:id: :get :protected

### to update a qualification

- qualification/update/:id: :patch :protected

```js
{
    details: String,
    doctorId: Number,
}
```

### to delete a single qualification

- qualification/delete/:id: :delete :protected

## Routes for specialization

### to create a new specialization

- specialization/create :post :protected

```js
{
    details: String,
    doctorId: Number,
}
```

### to get all specialization

- specialization/get-all :get :protected

### to get single specialization

- specialization/get/:id: :get :protected

### to update a specialization

- specialization/update/:id: :patch :protected

```js
{
    details: String,
    doctorId: Number,
}
```

### to delete a single specialization

- specialization/delete/:id: :delete :protected

## Routes for Disease

### to create a new disease

- disease/create :post :protected

```js
{
    diseaseName: String,
    diseaseDescription: String,
    diseaseSymptoms: String,
    diseaseCauses: String,
    diseaseType: String,
    riskFactor: Number,
}
```

### to get all disease

- disease/get-all :get :protected

### to get single disease

- disease/get/:id: :get :protected

### to update a disease

- disease/update/:id: :patch :protected

```js
{
    diseaseName: String,
    diseaseDescription: String,
    diseaseSymptoms: String,
    diseaseCauses: String,
    diseaseType: String,
    riskFactor: Number,
}
```

### to delete a single disease

- disease/delete/:id: :delete :protected

## Routes for Disease Treated By Dr

### to create a new disease treated by dr

- disease-treated-by-dr/create :post :protected

```js
{
    diseaseId: Number,
    doctorId: Number,
}
```

### to get all disease treated by dr

- disease-treated-by-dr/get-all :get :protected

### to get single disease treated by dr

- disease-treated-by-dr/get/:id: :get :protected

### to update a disease treated by dr

- disease-treated-by-dr/update/:id: :patch :protected

```js
{
    diseaseId: Number,
    doctorId: Number,
}
```

### to delete a single disease treated by dr

- disease-treated-by-dr/delete/:id: :delete :protected

## Routes for patient

### to create a new patient

- patient/create :post :protected

```js
{
    status: String,
    userId: Number,
}
```

### to get all patient

- patient/get-all :get :protected

### to get single patient

- patient/get/:id: :get :protected

### to update a patient

- patient/update/:id: :patch :protected

```js
{
    status: String,
    userId: Number,
}
```

### to delete a single patient

- patient/delete/:id: :delete :protected

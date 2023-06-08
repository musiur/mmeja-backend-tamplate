# 📚 **mmeja-backend-tamplate**

m=mongodb

m=mongoose

e=expressjs

j=jsonwebtoken

a=authentication

<br/>

# 🤿 **Let's dive into deep**

### 🏃‍♂️ **Getting Start:**

We need to make changes in files in the `configs` folder in root directory of out project.

We have two javascript files inside our `configs` folder

- database.config.js
- server.config.js

Inside our `database.config.js` file by default we have set this code:

```JS
const DatabaseConfig = {
    uri:`mongodb+srv://opu:opu@cluster0.bui2xrz.mongodb.net/template?retryWrites=true&w=majority`,
}

module.exports = DatabaseConfig
```

Now, we have to copy our `mongodb-uri` from mongodb connect and paste the copied `uri` into `DatabaseConfig` objects key `uri`. Also we have to create table `user` inside our database that is mentioned in that copied `uri` in **MONGODB** web or desktop application.

Let's make change to another file `server.config.js` where we have by default this code:

```JS
const ServerConfig = {
  port: 8080,
  secret: "Allahuakbar",
}

module.exports = ServerConfig
```

We may have whatever `port` we want and also the `secret` for `encrypting` and `decrypting` JWT for authentication.

Now, we are ready to install all the packages.

Use your favorite package manager to install all of them.

Here I would prefer to have `pnpm` or, `yarn`:

```
pnpm install
```

or,

```
yarn install
```

After installing all the packages we are ready to visit our other folders to work with.

### 📂 **Folders in our project:**

```JS
---|---> configs
   |---> controllers
   |---> database
   |---> middlewares
   |---> models
   |---> routes
   |---> schemas
   |---- server.js
   // node-modules

```

<br/><br/>

### 🔑 **Account sign up:**

We have a route `/auth/signup` From client side/ application body we have to get these information in order to create an account.

```JS
{
  name: "Musiur Alam Opu",
  email: "musiur.opu@gmail.com",
  password: "musiur.opu@gmail.com",
  role: "user"
}
```

Here: this object should be found in `body` with `POST` method. Account will be created if there is no error and also a `verification email` will be sent to give email address above.

After verifing account in database the user account will be verified for rest of the time.

# To be continued...

## **Up next**

### 🔐 **Account sign in:**

### 🆕 **Reset password:**

### 💁 **Forget password:**

### 💬 **Other routes, controllers, schemas, models, middlewares explore:**

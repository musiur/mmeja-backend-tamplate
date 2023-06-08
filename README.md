# 📚 **mmeja-backend-tamplate**

m=mongodb

m=mongoose

e=expressjs

j=jsonwebtoken

a=authentication

<br/>

# 🤿 **Let's dive into deep**

### **Getting Start:**

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

Now, we have to copy our `mongodb-uri` from mongodb connect and paste the copied `uri` into `DatabaseConfig` objects key `uri`.

Let's make change to another file `server.config.js` where we have by default this code:

```JS
const ServerConfig = {
  port: 8080,
  secret: "Allahuakbar",
}

module.exports = ServerConfig
```

We may have whatever `port` we want and also the `secret` for `encrypting` and `decrypting` JWT for authentication.

### **Account sign up:**

We have a route `/auth/signup` From client side/ application body we have to get these information in order to create an account.

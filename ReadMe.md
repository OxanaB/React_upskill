
This repository contains MERN Stack application which is about looking for a job. You can register your profile as CV and follow new vacancies of various companies.

## Requirements

You should be having these minimum requirements in your system to start working on the project.

                
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
* A supported browser like [Google Chrome](https://www.google.com/chrome/)
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (optional)
                
----

If you don`t have an MongoDB cluster, follow the next instruction:
1. Firstly, you need to [create](https://account.mongodb.com/account/register) an Mongodb Account
2. Go to the [Cloud MongoDb](https://cloud.mongodb.com/) and create new cluster
3. Open clusters list, choose one of them and click Connect
4. Choose "Connect your application", select Node.js as a driver and you`ll see cluster connection link

#### Cloudinary configuration

This service was used to upload user profile and company photos.

1. [Create an account](https://cloudinary.com/users/register/free) in that service
2.  Go to the cloudinary console and you will see your account details. You will need it in the future to launch the project successfully



First clone this repository to your local machine.

There are two parts in the repository, which you might need to run.

- In your terminal, open the directory you just created
- Go to the `/server` folder
- Make copy `.env.example` in `/config` folder and rename to `config.env`. 
- Edit variables in `config.env`.  Add a MongoDB cluster link to the `MONGO_URI` variable.
- Add a cloudname, apikey, apisecret to the `CLOUDINARY_...` variables
- Add a random string to the `SECRET_KEY`. It needs for hashing password
- Use the package manager [yarn](https://yarnpkg.com/) to install dependencies and run app.
```bash
yarn install
yarn start
```

> Remember that server will run on 5000 port by default and looks like (http://localhost:5000/api/v1)

- Go to the `/ui` folder
- Make copy `.env.example` and rename to `.env`. 
- Make copy `.env.example` and rename to `.env` and replace an `REACT_APP_API_URI` with your server host
- Use the package manager [yarn](https://yarnpkg.com/) to install dependencies and run app.
```bash
yarn install
yarn start
```

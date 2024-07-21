# spring-with-react
a simple to dos list project built with react and spring boot 

# How to run: 
### Back-end: 
Install mysql, and change .properties file to your credentials.

#### docker: 
steps for pulling & running mysql in docker 

1. pulling image
   If you prefer specific version, just change 'latest' to the desired version.
```
docker pull mysql:latest 
```

2. running container

** you can specify the port you desire to expose on your machine instead of '3308'

```
docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=strong_password -p 3308:3306 mysql:latest
```

3. open bash on container & create db
```
docker exec -it mysql bash
```

```
mysql -u root -p
```
** then enter your password 

```
create database tododb;
```

#### clarification: 
![mysql-create-db](https://github.com/user-attachments/assets/db83d1df-e85a-4d9a-9ea9-78b162797338)

Great! your back-end is all set-up now 🌠
   

### Front-end:
1. cd to the working dir of the project (where you cloned it)
2. run:
```
npm install 
```
```
npm start  
```

You're all set-up 🥳

# Overall: 
#### How to Login:
username: hanan  <br>
password: dummy <br>

![first-image](https://github.com/user-attachments/assets/bb181c8a-4d40-4387-9d8e-5851610408d5)

## Summery of pages

### Login 
![first-image](https://github.com/user-attachments/assets/cbb869de-d5ce-485d-87d3-5ae5f83de927)

### TODO CRUD 
![second-image](https://github.com/user-attachments/assets/b253bad7-b0a3-4bf9-bc78-b23fae78c3b1)
![third-image](https://github.com/user-attachments/assets/393a1cb4-6460-47f1-8064-facacc3194c8)
![fourth-image](https://github.com/user-attachments/assets/c4af2bb7-a28d-4af0-8634-5625a0796fe9)
![fifth-image](https://github.com/user-attachments/assets/3b49471e-edcb-4736-bba3-3474b6502439)
![sixth-image](https://github.com/user-attachments/assets/bbfcf8be-5239-46f1-aa96-f0002b766c40)
![last](https://github.com/user-attachments/assets/021ac7d4-ca85-4d4a-b5d4-eeda45c616ce)


### Simple Validation
![validation-2](https://github.com/user-attachments/assets/a399aaab-a3f6-4283-94fb-660d33ad44ce)
![validation-1](https://github.com/user-attachments/assets/4edaaa0d-1c61-42af-9358-2fd4b01c39e2)



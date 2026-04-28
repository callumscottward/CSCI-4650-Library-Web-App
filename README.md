This is a library management and access software created by 
- Justin Bartels
- Blake Britton
- Drew Scebold
- Callum Ward

# How to Run the Program on your Local Machine

- Step 1: Clone this project to your local machine and within the project root folder and install dependencies using
```bash
npm install
```

- Step 2: Setup database of sqlite (which is just an in 
memory database only for the ease of testing)
    - Make sure the prisma/schema.prisma file has this
  ```c
    datasource db {
      provider = "sqlite" 
      url      = env("DATABASE_URL")     
    }
  ```
    - Then Run a migration to create your database tables with Prisma Migrate
    ```bash
    npx prisma migrate dev
    ```
    - Alternatively, you might need to run a reset if you already have outdated migration info.
    ```bash
    npx prisma migrate reset
    ```
  
- Step 3, Generate important prisma client info using the following command (I'm not 100% sure what this does, but I'm pretty sure it's necessary)
```bash
npx prisma generate
```

- (Optional) Step 4, If you'd like to use the mock data in `prisma/seed.ts`, use the following command
```bash
npx prisma db seed
```

- Step 5, run dev server to serve the NextJS web app
    ```bash
    npm run dev
    ```

# How to Run the Program on AWS EC2 with a MySQL RDS

- Step 0, fire up ec2 and mysql rds, set up correctly with their security rules
    > By default, nextjs dev server run on port 3000 of http, so allow it's request
- Step 1, clone this project to the ec2 and within the project root folder
  install dependencies, you may also need to set up a swapspace area on your ec2 instance to avoid the npm i failing due to running out of ram

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
```

```bash
npm i
```
- Step 2, setup database of mysql rds 
    - ***make sure the prisma/schema.prisma file has this***
  ```c
    datasource db {
      provider = "mysql" 
      url      = "mysql://USER:PASSWORD@HOST:PORT/DATABASE"  
    }
  ```
  > Change the USER, PASSWORD, PORT and DATABASE of your mysql rds, specifically
  > you have to have an existing DATABSE within mysql. 
  > Tables can be created by prisma

    - Run the command to gain access to mysql cli

    ```bash
    sudo dnf install mariadb105 -y
    ```

    - Then Run a migration to create your database tables with Prisma Migrate
    ```bash
    npx prisma migrate dev --name init
    ```

    - Run this command to fill database with mock data from sql inserts (make sure you are in the Github Repo) filling in required information with the corresponding values from your RDS instance. After you run the command you will be prompted for your RDS password

    ```bash
    mysql -h [RDS ENDPOINT] -P 3306 -u [RDS USERNAME] -p [DATABASE NAME FROM ABOVE] < prisma/finalProjectInserts.sql
    ```

    - You can check if it worked by running the following commands:

    ```bash
    mysql -h [RDS ENDPOINT] -P 3306 -u [RDS USERNAME] -p [DATABASE NAME FROM ABOVE]
    ```

    - Run inside the MySQL cli

    ```SQL
    DESCRIBE Book;
    SELECT * FROM Book;
    \q;
    ```


    - There might be additional things to do here!


- Step 3, run dev server to serve the NextJS web app
    ```bash
    npm run dev
    ```


##
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
  install dependencies
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

    - Then Run a migration to create your database tables with Prisma Migrate
    ```bash
    npx prisma migrate dev --name init
    ```

    - There might be additional things to do here!


- Step 3, run dev server to serve the NextJS web app
    ```bash
    npm run dev
    ```


##
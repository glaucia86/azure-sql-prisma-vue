# Full Stack Application with Azure SQL & Prisma: Full Course

[![Thumbnail-Full-Stack-App-with-Azure-SQL-Prisma.jpg](https://i.postimg.cc/mkxjK6hB/Thumbnail-Full-Stack-App-with-Azure-SQL-Prisma.jpg)](https://postimg.cc/dkBGy68x)

A real study case application how to apply Node.Js with:

* **Azure SQL**
* **Prisma**
* **Vue.Js**
* **Azure Functions** 
* **Azure Static Web Apps**

## 🚀 Resources Used

- **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=javascript-52133-gllemos)**
- **[Node.js 14.x](https://nodejs.org/en/)**
- **[Azure Functions Core Tools 4.x](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash)**
- **[Azure SQL](https://azure.microsoft.com/products/azure-sql/database/?WT.mc_id=javascript-52133-gllemos)**
- **[Azure Free Account](https://azure.microsoft.com/?WT.mc_id=javascript-52133-gllemos)**
- **[Azure Static Web Apps](https://azure.microsoft.com/services/app-service/static/?WT.mc_id=javascript-52133-gllemos)**
- Some Visual Studio Code Extensions:
  - **[Azure Tools Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack&WT.mc_id=javascript-52133-gllemos)**
  - **[Azure Functions Vs Code Extension](https://github.com/Azure/azure-functions-core-tools)**
  - **[REST Client Extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client&WT.mc_id=javascript-52133-gllemos)**
  - **[Remote Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)**
  - **[Prisma Vs Code Extension](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma&WT.mc_id=javascript-52133-gllemos)**


## FrontEnd Starter Project

Before starting to watch the video series we recommend that you download the project (FrontEnd side).
Because we will use it to make the communication with the BackEnd created during this course!

**[FrontEnd Starter Project - HERE](https://github.com/glaucia86/frontend-vue-starter-app)**

## 💻 Video Series

Below you can see all the recorded videos about the application's development.

| Videos                                         | Description                                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **[Video 01 - Course Overview]()**             | In this video we will see about the course and the application that will be developed.                                    |
| **[Video 02 - Learning Objectives]()**         | In this video we will see the learning objectives of the Prisma Fundamentals module                                       |
| **[Video 03 - What is Prisma?]()**             | In this video we will learn what is Prisma?                                                                               |
| **[Vídeo 04 - Why we Should use Prisma?]()**   | In this video we will learn why we should use Prisma, which has been considered a powerful ORM for JavaScript Developers. |
| **[Video 05 - Key Concepts about Prisma]()**   | In this video we will learn the main pillars around the Prisma!                                                           |
| **[Vídeo 06 - Important Resources & Recap]()** | Recap on what we learned and how you can dig deeper into Prisma.                                                          |
| **[Vídeo 07]()**                               | Video Description                                                                                                         |
| **[Vídeo 08]()**                               | Video Description                                                                                                         |
| **[Vídeo 09]()**                               | Video Description                                                                                                         |
| **[Vídeo 10]()**                               | Video Description                                                                                                         |
| **[Vídeo 11]()**                               | Video Description                                                                                                         |
| **[Vídeo 12]()**                               | Video Description                                                                                                         |
| **[Vídeo 13]()**                               | Video Description                                                                                                         |
| **[Vídeo 14]()**                               | Video Description                                                                                                         |
| **[Vídeo 15]()**                               | Video Description                                                                                                         |
| **[Vídeo 16]()**                               | Video Description                                                                                                         |
| **[Vídeo 17]()**                               | Video Description                                                                                                         |
| **[Vídeo 18]()**                               | Video Description                                                                                                         |
| **[Vídeo 19]()**                               | Video Description                                                                                                         |
| **[Vídeo 20]()**                               | Video Description                                                                                                         |
| **[Vídeo 21]()**                               | Video Description                                                                                                         |
| **[Vídeo 22]()**                               | Video Description                                                                                                         |
| **[Vídeo 23]()**                               | Video Description                                                                                                         |
| **[Vídeo 24]()**                               | Video Description                                                                                                         |
| **[Vídeo 25]()**                               | Video Description                                                                                                         |
| **[Vídeo 26]()**                               | Video Description                                                                                                         |
| **[Vídeo 27]()**                               | Video Description                                                                                                         |
| **[Vídeo 28]()**                               | Video Description                                                                                                         |
| **[Vídeo 29]()**                               | Video Description                                                                                                         |
| **[Vídeo 30]()**                               | Video Description                                                                                                         |

## 🔥 How to run the application locally?

<details><summary><b>Project: employee-api</b></summary> 

To execute locally this project you will need to follow the steps bellow:

1. First you need to go to the folder: `employee-api` and run the command:

```bash
> npm install
```

3. Include the Azure SQL Server connection string creating an `.env` file:

```bash
# Database connection string
DATABASE_URL="sqlserver://DB_SERVER_NAME.database.windows.net:1433;database=DB_NAME;user=DB_USER@DB_SERVER_NAME;password={PASSWORD};encrypt=true"

# Shadow database connection string for development
SHADOW_DATABASE_URL="sqlserver://DB_SERVER_NAME.database.windows.net:1433;database=DB_NAME;user=DB_USER@DB_SERVER_NAME;password={PASSWORD};encrypt=true"
```

4. After to install all the Node.Js packages, now you can execute the command:

```bash
> nodemon
```

5. Now you will see the message saying the application is running in the port: `localhost:3001/api/v1` and start to test locally the application (using Postman):

| Objective             | HTTP Verb | Route                               |
| --------------------- | --------- | ----------------------------------- |
| Create a new Employee | POST      | localhost:3001/api/v1/employees     |
| List All Employees    | GET       | localhost:3001/api/v1/employees     |
| List Employee By Id   | GET       | localhost:3001/api/v1/employees/:id |
| Update Employee By Id | PUT       | localhost:3001/api/v1/employees/:id |
| Delete Employee By Id | DELETE    | localhost:3001/api/v1/employees/:id |

</details>

<details><summary><b>Project: client</b></summary>

To execute locally this project you will need to follow the steps bellow:

1. First you need to go to the folder: `client` and run the command:

```bash
> npm install
```
2. After to install all the Node.Js packages, now you can execute the command:

```bash
> npm run serve
```

3. Now, open your browser on `http://localhost:8080/` 

4. Inside the project you will see a file: `src/Api.js`. This file contains all the Back-End request information (local or Azure Functions). If you want to test the Front-End, just choose which url you want to test in the Back-End:

```js
/**
 * file: src/services/Api.js
 * data: 01/03/2022
 * description: file responsible for initializing 'axios' and HTTP base url requests
 * author: Glaucia Lemos <twitter: @glaucia_lemos86>
 */

import axios from 'axios';

export default () => axios.create({
  // => Back-End (local) 'baseURL'-> will make communication btw Front-End with Back-End
  // baseURL: 'http://localhost:3001/api/v1',

  // ==> Back-End (azure functions)
  baseURL: 'http://localhost:7071/api',
});
```

- **Back-End (local):** http://localhost:3001/api/v1
- **Back-End (Azure Functions):** http://localhost:7071/api

</details>

<details><summary><b>Project: api (serverless)</b></summary>

1. First you need to go to the folder: `api` and run the command:

```bash
> npm install
```

2. Include the Azure SQL Server connection string creating an `.env` file:

```bash
# Database connection string
DATABASE_URL="sqlserver://DB_SERVER_NAME.database.windows.net:1433;database=DB_NAME;user=DB_USER@DB_SERVER_NAME;password={PASSWORD};encrypt=true"

# Shadow database connection string for development
SHADOW_DATABASE_URL="sqlserver://DB_SERVER_NAME.database.windows.net:1433;database=DB_NAME;user=DB_USER@DB_SERVER_NAME;password={PASSWORD};encrypt=true"
```

3. Now create a file called: `local.settings.json` (root of the project) and include this information below:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": ""
  },
  "Host": {
    "LocalHttpPort": 7071,
    "CORS": "*"
  }
}
```

4. Now we need to execute the prisma migrate command. Run the command below

```
> npx prisma migrate dev
```

5. Now you can execute the command:

```bash
> npm run dev
```

You will see the message saying the application is running in the port: `http://localhost:7071/api/`

| Objective      | HTTP Verb | Route                               |
| -------------- | --------- | ----------------------------------- |
| CreateEmployee | POST      | http://localhost:7071/api/employees |
| GetEmployees   | GET       | http://localhost:7071/api/employees |
| GetEmployee    | GET       | http://localhost:7071/api/{id}      |
| UpdateEmployee | PUT       | http://localhost:7071/api/{id}      |
| DeleteEmployee | DELETE    | http://localhost:7071/api/{id}      |

</details>

## ⭐️ Important Resources

- ✅ **[Build serverless, full stack applications in Azure - Free Course](https://docs.microsoft.com/learn/paths/build-serverless-full-stack-apps-azure/?WT.mc_id=javascript-52133-gllemos)**
- ✅ **[Azure SQL Documentation](https://docs.microsoft.com/azure/azure-sql/azure-sql-iaas-vs-paas-what-is-overview?WT.mc_id=javascript-52133-gllemos)**
- ✅ **[Microsoft SQL Server Support in Prisma is Production-Ready](https://www.prisma.io/blog/prisma-microsoft-sql-server-azure-sql-production-ga)**
- ✅ **[Prisma Client CRUD Docs](https://www.prisma.io/docs/concepts/components/prisma-client/crud)**
- ✅ **[Deploying to Azure Functions Documentation](https://www.prisma.io/docs/guides/deployment/deployment-guides/deploying-to-azure-functions)**

## ❓ Questions? Comments? 

If you have any questions about the code developed, feel free to open an **[ISSUE HERE](https://github.com/glaucia86/azure-sql-prisma-vue/issues)**. We'll get back to you soon!

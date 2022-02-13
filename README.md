# UPI-Link-Generator
#### Note : Currently this only works for merchant UPI ID's
## ✨ Description
This Web app generates upi payment links for mobiles. On the payment page, it auto detects UPI apps and redirects to them with fixed `UPI ID` and `Amount`<br />
Try Out : https://paylinky.netlify.app/ <br/>

## 🛠️ Tech Stack
- React.js for Frontend
- Node.js and Express.js for Backend
- MonogDB for Database
- Tailwind CSS for frontend UI
## 🔥 Demo
https://paylinky.netlify.app/ <br/>

📂 Project Organization
------------

    ├── README.md          <- The top-level README for developers using this project.
    │
    ├── frontend
    │       ├── package.json        <- Containing the required node modules start up scripts etc
    │       ├── postcss.config.js   <- Tailwind css file
    │       ├── tailwind.config.js  <- Tailwind css file
    │       ├── public             
    │       └── src
    │           ├── App.js          <- React App 
    │           ├── index.js        <- React App startup 
    │           ├── pages           <- Folder for pages
    │           └── components      <- Folder for react components
    │
    │
    └── backend
        ├── node_modules   <- Folder containg node modules 
        ├── .env           <- MongoDB connection string
        ├── routes
        │    └── links.js  <- API Routes  
        │
        ├── index.js       <- Express app with startu
        ├── package.json   <- Containing the required node modules start up scripts etc
        └── db
             └──  conn.js  <- Connect to MongoDB 
        



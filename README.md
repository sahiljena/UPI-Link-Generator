# UPI-Link-Generator
#### Note : Currently this only works for merchant UPI ID's
<table>
  <tr>
    <td valign="top"><img src="https://i.ibb.co/z5mDnNk/Whats-App-Image-2022-02-13-at-9-21-16-PM-2.jpg" width="200"/></td>
    <td valign="top"><img src="https://i.ibb.co/NjX0qH4/Whats-App-Image-2022-02-13-at-9-21-16-PM.jpg" width="200"/></td>
    <td valign="top"><img src="https://i.ibb.co/HnxgDPc/Whats-App-Image-2022-02-13-at-9-21-16-PM-1.jpg" width="200"/></td>
  </tr>
 </table>
 
## ✨ Description
This Web app generates upi payment links for mobiles. On the payment page, it auto detects UPI apps and redirects to them with fixed `UPI ID` and `Amount`<br />
Try Out :  **https://paylinky.netlify.app** <br/>

## 🛠️ Tech Stack
- React.js for Frontend
- Node.js and Express.js for Backend
- MonogDB for Database
- Tailwind CSS for frontend UI
## 🔥 Demo
**https://paylinky.netlify.app/** <br/>

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
        





# 🎮 PlayStation Store  

## 🌟 Overview  

The **PlayStation Store** is a fully responsive e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). It allows users to browse and purchase PlayStation-related products with a clean and intuitive user interface.  

### 🔗 Project Link: [PlayStation Store](https://play-station-store-e6933.web.app/)  

---

## 🔥 Features  

- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop).  
- **Shopping Cart**: Add products to the cart, update quantities, and remove items.  
- **Authentication**: Secure user authentication with signup/login functionality using Firebase Authentication.  
- **Order Management**: Users can review and manage their orders.  

---

### 🚧 Note  
This project is still under development and is yet to be completed.  

---

## 🛠️ Technologies Used  

### Frontend  
- **React.js**: For building the user interface.  
- **React Router**: For navigation between pages.  

### Backend  
- **Node.js**: Server-side runtime environment.  
- **Express.js**: For building RESTful APIs.  

### Database  
- **MongoDB**: For storing product, user, and order data.  

### Deployment  
- **Firebase Hosting**: For deploying the frontend.  

---

## 📦 Installation and Setup  

### Prerequisites  
- Node.js and npm installed.  
- MongoDB set up locally or through a cloud provider like MongoDB Atlas.  
- Firebase CLI installed.  

### Steps  

1. **Clone the Repository**:  
   ```bash  
   git clone https://github.com/yourusername/playstation-store.git  
   cd playstation-store  
   ```  

2. **Install Dependencies**:  
   ```bash  
   npm install  
   cd client && npm install  
   ```  

3. **Configure Environment Variables**:  
   - Create a `.env` file in the root directory.  
   - Add the following variables:  
     ```env  
     MONGO_URI=<Your MongoDB URI>  
     PORT=5000  
     JWT_SECRET=<Your Secret Key>  
     ```  

4. **Run the Application**:  
   - Backend:  
     ```bash  
     npm run server  
     ```  
   - Frontend:  
     ```bash  
     cd client  
     npm run dev  
     ```  

5. **Build for Production**:  
   - Build the React app:  
     ```bash  
     npm run build  
     ```  
   - Deploy to Firebase:  
     ```bash  
     firebase deploy  
     ```  

---

## 🗂️ Project Structure  

```
playstation-store/  
├── client/              # Frontend code  
│   ├── public/          # Static files (images)  
│   ├── src/             # React components, hooks, and styles  
├── server/              # Backend code  
│   ├── models/          # Database models  
│   ├── routes/          # API routes  
├── .env                 # Environment variables  
├── package.json         # Project metadata  
└── README.md            # Project documentation  
```  

---

## 🚀 Future Enhancements  

- Implement **wishlists** for users.  
- Enable **reviews and ratings** for products.  
- Add **multi-language support**.  
- View a variety of PlayStation products with detailed descriptions.  
- Quickly find desired products using **search and filtering options**.  
- Manage products, orders, and users (**admin-only functionality**).  

---

## 🙌 Acknowledgments  

Special thanks to the open-source community for the tools and libraries used in this project.  

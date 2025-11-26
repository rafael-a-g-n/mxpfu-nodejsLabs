# Friends List Application 🧑‍🤝‍🧑

This project is a simple Node.js application for managing a friends list, demonstrating CRUD operations with Express.js. It also includes an authentication feature using JSON Web Tokens.

## ✨ Features

- **C**reate new friends
- **R**ead all friends or a single friend
- **U**pdate friend details
- **D**elete friends
- User authentication and authorization with JWT (optional: `index_withauth.js`)

## 🚀 Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. 💚
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js. 🌐
- **JSON Web Tokens (JWT)**: For securely transmitting information between parties as a JSON object. 🔑
- **nodemon**: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected. 🔄

## 🛠️ Installation & Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rafael-a-g-n/friends-list-api.git
   cd friends-list-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the application (without authentication):**

   ```bash
   npm start
   ```

   The application will be running at `http://localhost:3000`.

4. **Start the application (with authentication):**
   ```bash
   npm run start_auth
   ```
   The application with authentication will be running at `http://localhost:3000`. You'll need to register and log in to access protected routes.

## 🤝 Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## 🙏 Credits

This project was forked from the `ibm-developer-skills-network/mxpfu-nodejsLabs` repository. Special thanks to the original authors for their foundational work.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

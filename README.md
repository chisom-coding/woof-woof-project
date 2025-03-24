# Dog Breed Image Analyzer

This is a React + Redux application that fetches a list of dog breeds from the [Dog CEO API](https://dog.ceo/dog-api/), counts the number of images available for each breed, and displays the top 10 breeds in a pie chart using Recharts.

## 🚀 Features

- Fetches all dog breeds from the API
- Retrieves and counts images for each breed
- Displays a grid of all the dog breeds and the amount of images they have
- Displays a pie chart of the top 10 breeds with the most images
- Containerized with Docker

## 🛠 Tech Stack

- **Frontend:** React, Redux Toolkit, TypeScript
- **API:** Dog CEO API
- **Charts:** Recharts
- **Containerization:** Docker

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/chisom-coding/woof-woof-project.git
cd woof-woof-project
```

### 2️⃣ Install Dependencies

```sh
npm install --legacy-peer-deps
```

### 3️⃣ Start the Development Server

```sh
npm run dev
```

- The application will be available at `http://localhost:5173`

## 🐳 Running with Docker

### 1️⃣ Build the Docker Image

```sh
docker-compose build
```

### 2️⃣ Start the Container

```sh
docker-compose up -d
```

- Open `http://localhost:5173` in your browser to view the app.

### 3️⃣ Stop the Container

```sh
docker-compose down
```

## 📜 API Endpoints Used

- `GET /breeds/list/all` → Fetches all dog breeds
- `GET /breed/{breed}/images` → Fetches all images of a breed

## 📝 To-Do

- [ ] Add unit tests
- [ ] Add Gallary View
- [ ] Improve UI/UX

---

### 👨‍💻 Author

Developed by **Chisom Oguama** 🚀

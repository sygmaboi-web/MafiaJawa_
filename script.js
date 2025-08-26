body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #3ad29f, #33a1ff, #ffffff);
  background-size: 400% 400%;
  animation: gradientBG 12s ease infinite;
  color: #222;
}

/* Animasi Background */
@keyframes gradientBG {
  0% {background-position: 0% 50%;}
  50% {background-position: 100% 50%;}
  100% {background-position: 0% 50%;}
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.9);
  padding: 15px 30px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
}

.navbar .logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #0c7c59;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #0c7c59;
  font-weight: bold;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #33a1ff;
}

/* Hero */
.hero {
  text-align: center;
  padding: 60px 20px;
  color: white;
  animation: fadeIn 2s ease;
}

.hero h1 span {
  color: yellow;
}

.poster-container img {
  width: 250px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transition: transform 0.3s;
}
.poster-container img:hover {
  transform: scale(1.1);
}

/* Section */
.section {
  padding: 60px 20px;
  text-align: center;
}

/* Cards */
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-10px);
}
.card img {
  width: 100%;
  border-radius: 12px;
}

/* Kasir */
#kasir-app {
  margin-top: 20px;
}

.menu-items button {
  display: block;
  margin: 10px auto;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #0c7c59;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}
.menu-items button:hover {
  background: #33a1ff;
}

.payment img {
  margin-top: 15px;
  width: 200px;
}

/* Animasi */
@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

.fade-in {
  animation: fadeIn 2s ease;
}

/* Footer */
footer {
  background: rgba(0,0,0,0.7);
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 40px;
}

/* Hidden Class */
.hidden {
  display: none;
}

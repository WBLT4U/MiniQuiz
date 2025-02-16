<template>
  <div class="landing-page">
    <!-- Header with Menus -->
    <header class="header">
      <div class="logo">LearningApp</div>
      <!-- Hamburger Icon for Small Devices -->
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- Navigation Menu -->
      <nav class="menu" :class="{ active: isMenuOpen }">
        <a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">About</a>
        <a href="#" class="menu-item">Courses</a>
        <a href="#" class="menu-item">Contact</a>
      </nav>
    </header>

    <!-- Main Content -->
    <div class="content">
      <!-- Social Links on the Left -->
      <div class="social-links">
        <a href="https://www.linkedin.com/in/taofiq-abdulsalam" class="social-link">
          <img src="@/assets/images/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/WBLT4U" class="social-link">
          <img src="@/assets/images/github-icon.png" alt="Twitter" />
        </a>
        <a href="mailto:taofiqabdulsalam48@gmail.com" class="social-link">
          <img src="@/assets/images/email-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://wa.me/+2348066713592" class="social-link">
          <img src="@/assets/images/whatsapp-icon.png" alt="LinkedIn" />
        </a>
      </div>

      <!-- Main Text and People Image in the Center -->
      <div class="main-content">
        <h1>Nigerian Edtech Startup, LearningApp Launches</h1>
        <p>Gamified Platform to Upskill Africans.</p>
        <h1><p><router-link to="/quiz" class="start-quiz-button">Start Quiz</router-link></p></h1>
        <img src="@/assets/images/developers.png" alt="People" class="people-image" />
      </div>

      <!-- More From This Author on the Right -->
      <div class="author-section">
        <h2>More From This Author</h2>
        <div class="author-links">
          <h3 class="title">Government</h3>
          <a href="#" class="author-link">Lagos wants its innovation ecosystem to become a global leader</a>
          <h3 class="title">Event</h3>
          <a href="#" class="author-link">TechCabal and Moniepoint partner</a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Quick Links</h3>
          <a href="#" class="footer-link">Home</a>
          <a href="#" class="footer-link">About</a>
          <a href="#" class="footer-link">Courses</a>
          <a href="#" class="footer-link">Contact</a>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/taofiq-abdulsalam" class="social-link">
              <img src="@/assets/images/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/WBLT4U" class="social-link">
              <img src="@/assets/images/github-icon.png" alt="Twitter" />
            </a>
            <a href="mailto:taofiqabdulsalam48@gmail.com" class="social-link">
              <img src="@/assets/images/email-icon.png" alt="LinkedIn" />
            </a>
            <a href="https://wa.me/+2348066713592" class="social-link">
              <img src="@/assets/images/whatsapp-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@learningapp.com</p>
          <p>Phone: +234 806 671 3592</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 LearningApp. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      isMenuOpen: false, // State to control menu visibility
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
    },
  },
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;
  position: relative;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
}

.menu {
  display: flex;
  gap: 20px;
}

.menu-item {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.menu-item:hover {
  color: #007bff;
}

.hamburger {
  display: none; /* Hidden by default */
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #333;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  gap: 20px;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-link img {
  width: 24px;
  height: 24px;
}

.main-content {
  text-align: center;
  max-width: 600px;
  flex: 1;
}

.main-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.main-content p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 30px;
}

.people-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 30px;
}

.start-quiz-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.start-quiz-button:hover {
  background-color: #218838;
}

.author-section {
  max-width: 300px;
  text-align: left;
}

.author-section h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.author-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.author-link {
  text-decoration: none;
  color: #007bff;
  font-weight: 1000;
}

.author-link:hover {
  text-decoration: underline;
}

/* Footer Styles */
.footer {
  width: 100%;
  background-color: #333;
  color: white;
  padding: 40px 20px;
  margin-top: auto; /* Push footer to the bottom */
}

.footer-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;
}

.footer-section {
  flex: 1;
}

.footer-section h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.footer-link {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
}

.footer-link:hover {
  color: #007bff;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon img {
  width: 24px;
  height: 24px;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #444;
}

.footer-bottom p {
  margin: 0;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .social-links {
    flex-direction: row;
    justify-content: center;
  }

  .author-section {
    text-align: center;
  }

  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: row;
    align-items: center;
  }

  .menu {
    display: none; /* Hide menu by default on small screens */
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #f8f9fa;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .menu.active {
    display: flex; /* Show menu when active */
  }

  .hamburger {
    display: flex; /* Show hamburger icon on small screens */
  }

  .main-content h1 {
    font-size: 2rem;
  }

  .main-content p {
    font-size: 1rem;
  }

  .author-section h2 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .main-content h1 {
    font-size: 1.5rem;
  }

  .main-content p {
    font-size: 0.9rem;
  }

  .start-quiz-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  .author-section h2 {
    font-size: 1rem;
  }

  .author-link {
    font-size: 0.9rem;
  }
}
</style>
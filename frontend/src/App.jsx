import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import AboutBanner from "./components/about/about-banner";
import { MeetTheTeam } from "./components/about/meet-the-team";
import TestimonialCarousel from "./components/testimonial-carousel/testimonial-carousel";
import MapSearch from "./components/map/MapSearch";
import PackList from "./components/pack-list/pack-list";
import WeatherCTA from "./components/weather-cta/weather-cta";
import Weather from "./components/weather/weather";
import { Faq } from "./components/faq-page/faq";
import Login from "./components/login/log-in";
import SignUp from "./components/login/sign-up";
import AuthPage from "./components/login/authContext";
import { AuthProvider } from "./components/login/authContext";
import ContactUs from "./components/contact-us/contact-us";
import { Footer } from "./components/footer/footer";
import "animate.css/animate.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header component for the top navigation bar - visible on all pages */}
      <Header />
      
      {/* Authentication provider to manage user authentication */}
      <AuthProvider>
        {/* Routing for different pages of the application */}
        <Routes>
          {/* Home page */}
          <Route path="/" element={<><Home /></>} />
          
          {/* About page with banner, team, and testimonials */}
          <Route path="/about" element={<><AboutBanner /><MeetTheTeam /><TestimonialCarousel /></>} />
          
          {/* Pack List page with weather call-to-action */}
          <Route path="/pack-list" element={<><PackList /><WeatherCTA /></>} />
          
          {/* Bucket List page with map search */}
          <Route path="/bucket-list" element={<MapSearch />} />
          
          {/* Weather Forecast page */}
          <Route path="/weather-forecast" element={<Weather />} />
          
          {/* FAQs page */}
          <Route path="/faqs" element={<Faq />} />
          
          {/* Signup and login pages */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          {/* Authentication page */}
          <Route path="/auth" element={<AuthPage />} />
          
          {/* Contact Us page */}
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </AuthProvider>

      {/* Footer component - visible on all pages */}
      <Footer />
    </div>
  );
}

export default App;

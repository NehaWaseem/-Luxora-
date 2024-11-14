// src/pages/Home.js
import React from 'react';
const home = () => {
  // State for feedback animation
  const [feedbackIndex, setFeedbackIndex] = useState(0);

  const reviews = [
    '"Amazing experience! Highly recommend!" - Jane Doe',
    '"Great service and beautiful rooms!" - John Smith',
    '"Best hotel experience ever!" - Alice Cooper',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFeedbackIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change review every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1><i >Luxora</i></h1>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>{" "}
            {/* Point to rooms section */}
            <li>
              <a href="#signup">Sign Up</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#feedback">Feedback</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <h2>Welcome to Our Hotel</h2>
            <p>Your comfort is our priority. Book your stay with us!</p>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-us">
            <h3>About Us</h3>
            <p>
              At <b>Luxora</b>, we pride ourselves on offering a luxurious and
              comfortable experience for all our guests. Nestled in the heart of
              the city, our hotel offers world-class amenities and unparalleled
              service. Whether you're here for business or leisure, our
              dedicated staff ensures that your stay is seamless and memorable.
            </p>

            <p>
              Our hotel features elegantly designed rooms, fine dining
              restaurants, and state-of-the-art facilities, including a
              fully-equipped fitness center, a relaxing spa, and a stunning
              rooftop pool with panoramic views of the city skyline. We believe
              in providing more than just a place to stay—we provide an
              experience that reflects the warmth and hospitality of our city.
            </p>

            <p>
              Since opening our doors in [Year], we have welcomed guests from
              around the world, offering them a home away from home. With our
              commitment to excellence, we continue to set the standard for
              high-end accommodations in the region. At <b>Luxora</b>, we don't
              just meet your expectations—we exceed them.
            </p>
          </div>

          <div className="image-slider">
            <div className="slider">
              <img
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hotel Image 1"
              />
              <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600" />
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hotel Image 3"
              />
              <img
                src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Hotel Image 4"
              />

             <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600"alt="Hotel Image 5" />

            <img src="https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D" />
            </div>
          </div>
        </section>

        <div id="rooms" className="grid-container">
          {/* Search for Rooms Section */}
          <div className="grid-item search-booking">
            <h3>Search for Rooms</h3>
            <input type="date" placeholder="Check-in Date" />
            <input type="date" placeholder="Check-out Date" />
            <button>Search</button>
          </div>

          {/* Featured Rooms */}
          <div className="grid-item featured-rooms">
            <h3>Featured Rooms</h3>
            <div className="room">
              <h4>Deluxe Room</h4>
              <p>$150 per night</p>
              <button>View Details</button>
            </div>
            <div className="room">
              <h4>Executive Suite</h4>
              <p>$250 per night</p>
              <button>View Details</button>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <section id="feedback" className="feedback-section">
          <h3>Customer Feedback</h3>
          <div className="feedback-box">
            <p>{reviews[feedbackIndex]}</p>
            <button>Give Feedback</button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h3>Contact Us</h3>
          <p>Email: contact@ourhotel.com</p>
          <p>Phone: +1 234 567 890</p>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 Hotel Reservation System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default home;

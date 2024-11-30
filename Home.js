import React, { useState, useEffect } from "react";
import "./Home.css";

const Home= () => {
    const [feedbackIndex, setFeedbackIndex] = useState(0);

    const reviews = [
        '"Amazing experience! Highly recommend!" - Jane Doe',
        '"Great service and beautiful rooms!" - John Smith',
        '"Best hotel experience ever!" - Alice Cooper',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFeedbackIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return React.createElement(
        "div",
        { className: "home" },
        React.createElement(
            "main",
            null,
            React.createElement(
                "section",
                { id: "home", className: "hero" },
                React.createElement(
                    "div",
                    { className: "hero-content" },
                    React.createElement("h2", null, "Welcome to Our Hotel"),
                    React.createElement("p", null, "Your comfort is our priority. Book your stay with us!")
                )
            ),
            React.createElement(
                "section",
                { id: "about", className: "about-section" },
                React.createElement(
                    "div",
                    { className: "about-us" },
                    React.createElement("h2", null, "Rooms"),
                    React.createElement("h2", null, "Experience the comfort"),
                    React.createElement(
                        "p",
                        null,
                        "Safety and comfort are key factors in leisure stays these days. We assure you of medical-grade stringent sanitation procedures in preparing our rooms for guests so you can stay with us with peace of mind."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Our hotel features elegantly designed rooms, fine dining restaurants, and state-of-the-art facilities, including a fully-equipped fitness center, a relaxing spa, and a stunning rooftop pool with panoramic views of the city skyline."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "image-slider" },
                    React.createElement(
                        "div",
                        { className: "slider" },
                        React.createElement("img", {
                            src:
                                "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
                            alt: "Hotel Image 1",
                        }),
                        React.createElement("img", {
                            src:
                                "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
                            alt: "Hotel Image 2",
                        }),
                        React.createElement("img", {
                            src:
                                "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
                            alt: "Hotel Image 3",
                        }),
                        React.createElement("img", {
                            src:
                                "https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&w=600",
                            alt: "Hotel Image 4",
                        }),
                        React.createElement("img", {
                            src:
                                "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600",
                            alt: "Hotel Image 5",
                        }),
                        React.createElement("img", {
                            src:
                                "https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
                        })
                    )
                )
            ),
            React.createElement(
                "section",
                { id: "refreshments", className: "refreshments-section" },
                React.createElement(
                    "div",
                    { className: "image-slider" },
                    React.createElement(
                        "div",
                        { className: "slider" },
                        React.createElement("img", {
                            src:
                                "https://images.unsplash.com/photo-1522726336270-3a0053210f06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
                            alt: "Refreshment Image 1",
                        }),
                        React.createElement("img", {
                            src:
                                "https://plus.unsplash.com/premium_photo-1661479325041-bd4af6dd7833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdGVsJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
                            alt: "Refreshment Image 1",
                        }),
                        React.createElement("img", {
                            src:
                                "https://images.pexels.com/photos/3026806/pexels-photo-3026806.jpeg?auto=compress&cs=tinysrgb&w=600",
                            alt: "Refreshment Image 2",
                        }),
                        React.createElement("img", {
                            src:
                                "https://plus.unsplash.com/premium_photo-1664392073748-35c3a1c3c385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvdGVsJTIwcmVzdGF1cmFudCUyMGRyaW5rc3xlbnwwfHwwfHx8MA%3D%3D",
                            alt: "Refreshment Image 3",
                        })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "refreshments-description" },
                    React.createElement("h2", null, "Refreshments"),
                    React.createElement("h2", null, "Experience The Flavors"),
                    React.createElement(
                        "p",
                        null,
                        "Enjoy a wide range of refreshments at our hotel, from handcrafted cocktails to gourmet coffee and tea selections. Our in-house caf� offers a perfect setting to unwind and savor delicious treats. Whether you prefer a relaxing drink by the pool or a quick snack on the go, we have options to delight every palate."
                    )
                )
            ),
            React.createElement(
                "div",
                { id: "rooms", className: "rooms-section" },
                React.createElement(
                    "div",
                    { className: "search-booking" },
                    React.createElement("h3", null, "Search for Rooms"),
                    React.createElement(
                        "div",
                        { className: "search-options" },
                        React.createElement("input", {
                            type: "date",
                            placeholder: "Check-in Date",
                            "aria-label": "Check-in Date",
                        }),
                        React.createElement("input", {
                            type: "date",
                            placeholder: "Check-out Date",
                            "aria-label": "Check-out Date",
                        }),
                        React.createElement(
                            "select",
                            null,
                            React.createElement("option", { value: "", disabled: true, selected: true }, "Select number of Guests"),
                            React.createElement("option", { value: "1" }, "1 Guest"),
                            React.createElement("option", { value: "2" }, "2 Guests"),
                            React.createElement("option", { value: "3" }, "3 Guests")
                        ),
                        React.createElement(
                            "select",
                            { name: "bed-options", id: "bed-options" },
                            React.createElement("option", { value: "", disabled: true, selected: true }, "Select number of beds"),
                            React.createElement("option", { value: "1" }, "1 Bed"),
                            React.createElement("option", { value: "2" }, "2 Beds"),
                            React.createElement("option", { value: "3" }, "3 Beds"),
                            React.createElement("option", { value: "4" }, "4 Beds")
                        ),
                        React.createElement(
                            "select",
                            { name: "bath-options", id: "bath-options", className: "bath-dropdown" },
                            React.createElement("option", { value: "", disabled: true, selected: true }, "Select number of baths"),
                            React.createElement("option", { value: "1" }, "1 Bath"),
                            React.createElement("option", { value: "2" }, "2 Baths"),
                            React.createElement("option", { value: "3" }, "3 Baths")
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "search-button-container" },
                        React.createElement("button", null, "Search")
                    )
                ),
                React.createElement(
                    "div",
                    { className: "featured-rooms" },
                    React.createElement("h3", null, "Featured Rooms"),
                    React.createElement(
                        "div",
                        { className: "room-slider" },
                        [
                            {
                                title: "Deluxe Room",
                                img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg0fHxsdXh1cnklMjByb29tfGVufDB8fDB8fHww",
                                description: "A luxurious room with all amenities and stunning views.",
                            },
                            {
                                title: "Executive Suite",
                                img: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGx1eHVyeSUyMHJvb218ZW58MHx8MHx8fDA%3D",
                                description: "Spacious suite with separate living area, perfect for business stays.",
                            },
                            {
                                title: "Presidential Suite",
                                img: "https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGx1eHVyeSUyMHJvb218ZW58MHx8MHx8fDA%3D",
                                description: "The pinnacle of luxury with premium services and breathtaking views.",
                            },
                        ].map((room, index) =>
                            React.createElement(
                                "div",
                                { className: "room", key: index },
                                React.createElement("img", { src: room.img, alt: room.title }),
                                React.createElement(
                                    "div",
                                    { className: "room-content" },
                                    React.createElement("h4", null, room.title),
                                    React.createElement("p", null, room.description)
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                "section",
                { id: "feedback", className: "feedback-section" },
                React.createElement("h3", null, "Customer Feedback"),
                React.createElement(
                    "div",
                    { className: "feedback-box" },
                    React.createElement("p", null, reviews[feedbackIndex]),
                    React.createElement("button", null, "Give Feedback")
                )
            ),
            React.createElement(
                "section",
                { id: "contact", className: "contact-section" },
                React.createElement("h3", null, "Contact Us"),
                React.createElement("p", null, "Email: contact@ourhotel.com"),
                React.createElement("p", null, "Phone: +1 234 567 890")
            )
        ),
        React.createElement(
            "footer",
            { className: "App-footer" },
            React.createElement("p", null, "&copy; 2024 Hotel Reservation System. All rights reserved.")
        )
    );
};

export default Home;

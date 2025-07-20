import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor"); //1
  }

  // Used to make API CALL
  componentDidMount() {
    console.log("Parent componentDidMount"); //6
  }

  render() {
    console.log("render Parent"); // 2

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-primary">Foodie Express</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about connecting food lovers with their favorite restaurants, 
              delivering happiness one meal at a time.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-in">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize food delivery by creating seamless connections between 
                restaurants and customers, ensuring every meal arrives fresh, fast, and 
                with a smile.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-in" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted food delivery platform, where every order 
                is a delightful experience that brings communities together through 
                the love of great food.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-white shadow-lg card-hover animate-fade-in">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Lightning Fast</h4>
                <p className="text-gray-600">Quick delivery times to satisfy your cravings without the wait.</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-white shadow-lg card-hover animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="text-5xl mb-4">🛡️</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Safe & Secure</h4>
                <p className="text-gray-600">Your data and payments are protected with top-tier security.</p>
              </div>

              <div className="text-center p-6 rounded-xl bg-white shadow-lg card-hover animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="text-5xl mb-4">🌟</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">Quality First</h4>
                <p className="text-gray-600">We partner with the best restaurants to ensure top-quality meals.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
            <div className="max-w-2xl mx-auto">
              <UserClass />
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-xl p-6 card-hover">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div className="bg-gradient-to-br from-accent to-accent/80 text-white rounded-xl p-6 card-hover">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-accent-100">Partner Restaurants</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 card-hover">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-green-100">Orders Delivered</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 card-hover">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-purple-100">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
import React from "react";

const Auth: React.FC = ( ) => {

    return <> 
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/bg.jpg')" }} 
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h3 className="text-2xl font-bold text-center mb-4">Login</h3>
        <form>
          <input
            className="w-full p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <span className="text-blue-600">Register</span>
        </p>
      </div>
    </div>
    </>
};

export default Auth;

    
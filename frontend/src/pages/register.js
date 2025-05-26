import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Register = ({ Image }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering:", { username, email, password });
  };

  return (
    <div className="register-page flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="hidden w-1/2 items-center justify-center bg-black p-6 md:flex">
          {Image?.localFile && (
            <GatsbyImage
              image={getImage(Image.localFile)}
              alt="Register image"
              className="max-w-xs"
            />
          )}
        </div>

        {/* Right form block */}
        <div className="w-full p-8 md:w-1/2">
          <h2 className="mb-4 text-center text-2xl font-bold">Register</h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full rounded border p-2"
                placeholder="johnsmith007"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full rounded border p-2"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full rounded border p-2"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-black py-2 text-white"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

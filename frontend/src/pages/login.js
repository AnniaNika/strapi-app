import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import axios from "axios"
import "../styles/login-page.scss"

const LoginPage = () => {
  const { nodes } = useStaticQuery(graphql`
    query {
      allStrapiLogin {
        nodes {
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          Blocks {
            registerForm
            id
            strapi_component
            strapi_id
          }
        }
      }
    }
  `).allStrapiLogin

  const { Image } = nodes[0]

  const [isRegistering, setIsRegistering] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const API_URL = "http://localhost:1337/api/auth/local"

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        isRegistering ? `${API_URL}/register` : API_URL,
        isRegistering
          ? { username, email, password }
          : { identifier: email, password }
      )
      localStorage.setItem("jwt", response.data.jwt)
      alert(`Success! Welcome ${response.data.user.username}`)
    } catch (error) {
      alert("Error: " + error.response.data.error.message)
    }
  }

  return (
    <div className="login-page flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Left Section */}
        <div className="wrapper hidden w-1/2 flex-col items-center justify-center p-6 text-white md:flex">
          <GatsbyImage
            image={getImage(Image?.localFile)}
            alt="login image"
            className="mb-4"
          />
          <h3 className="text-xl font-semibold">Exam Mastery Hub</h3>
          <p className="text-center text-sm">
            Unleash Your Academic Success with Exam Mastery Hub's Exam
            Excellence Platform.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full p-8 md:w-1/2">
          <h2 className="mb-4 text-center text-2xl font-bold">
            University Hub
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegistering && (
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  className="w-full rounded border p-2"
                  placeholder="johnsmith007"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            )}
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
            <div className="flex justify-between text-sm text-blue-500">
              <a href="#">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full rounded bg-black py-2 text-white"
            >
              {isRegistering ? "Register" : "Sign in"}
            </button>
            <div className="text-center text-sm">or</div>
          </form>
          <div className="mt-4 text-center text-sm">
            {isRegistering ? "Already have an account?" : "Are you new?"}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="ml-1 text-blue-500"
            >
              {isRegistering ? "Login" : "Create an Account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

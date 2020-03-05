import React, { useState } from 'react'
import sass from '~/sass/components/Subscribe.scss'

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.info(email)
  }

  return (
    <form onSubmit={handleSubmit} className={sass.subscribe}>
      <input
        className={sass.input}
        name="email"
        type="email"
        value={email}
        required={true}
        onChange={event => setEmail(event.target.value)}
        placeholder="Enter your e-mail address"
      />
      <button className={sass.button}>Join</button>
    </form>
  )
}

export default Subscribe

import React, { useState } from "react";

function FormEmail() {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [log, setLog] = useState("");

  function fakeSubmit(email) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        setLog(email);
      }, 2000);
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("⏳ Отправка...");
    if (!email.trim()) {
      setStatus("❌ Введите email");
      setLog("");

      return;
    }

    await fakeSubmit(email);

    setStatus("✅ Успешно отправлено!");
    setEmail("");

  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        // type="email"
        placeholder="Введите email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">отправить</button>
      <p>{status}</p>
      <strong>{log}</strong>
    </form>
  );
}

export default FormEmail;

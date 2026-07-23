"use client";

import { useState } from "react";

const message = "Артём, хочу проверить предложение и найти следующего клиента.";

export function CopyCta() {
  const [copied, setCopied] = useState(false);

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
      window.prompt("Скопируйте сообщение:", message);
    }
  }

  return (
    <div className="copy-cta">
      <p className="copy-label">Сообщение для старта</p>
      <p className="copy-message">{message}</p>
      <button className="button button-dark" type="button" onClick={copyMessage}>
        {copied ? "Скопировано ✓" : "Скопировать сообщение"}
      </button>
      <p className="copy-hint">
        Отправьте его Артёму там, где вы обычно общаетесь.
      </p>
    </div>
  );
}

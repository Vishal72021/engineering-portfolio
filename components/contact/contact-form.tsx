"use client";

import { ArrowUpRight, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: "",
};

type FormState = typeof initialState;
type SubmissionStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send your message.");
      }

      setForm(initialState);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__heading">
        <div>
          <span className="mono-label muted">Direct message</span>
          <h3>Tell me what you&apos;re building.</h3>
        </div>
        <ArrowUpRight size={18} aria-hidden="true" />
      </div>

      <div className="contact-form__grid">
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            maxLength={100}
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@company.com"
            autoComplete="email"
            maxLength={160}
            required
          />
        </label>
      </div>

      <label>
        <span>Company / role <em>optional</em></span>
        <input
          name="company"
          type="text"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          placeholder="Company, team or role"
          autoComplete="organization-title"
          maxLength={160}
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="What would you like to discuss?"
          rows={6}
          maxLength={4000}
          required
        />
      </label>

      <label className="contact-form__honeypot" aria-hidden="true">
        <span>Website</span>
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </label>

      <div className="contact-form__footer">
        <div className="contact-form__status" aria-live="polite">
          {status === "success" ? "Message sent — thank you." : null}
          {status === "error" ? errorMessage : null}
        </div>

        <button
          className="ui-button ui-button--primary ui-button--md"
          type="submit"
          disabled={status === "sending"}
        >
          <Send size={15} />
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

import React, { useState } from "react";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { Send } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
      message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://generator-contact.alankharisov1.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      setIsSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      alert("Помилка при відправці: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        {isSuccess ? (
          <div className="text-center text-green-600">
            <p className="text-xl font-bold">Дякуємо!</p>
            <p>Ваша заявка прийнята. Ми зв'яжемося з вами найближчим часом.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input name="name" label="Ваше ім'я" placeholder="Олександр" required />
            <Input name="email" label="Телефон/Email" placeholder="+38 (0__) ___-__-__" required />
            <Textarea name="message" label="Повідомлення" placeholder="Опишіть проблему..." rows={4} />
            <Button type="submit" isLoading={isSubmitting} className="w-full">
              <Send className="mr-2 h-4 w-4" /> Надіслати заявку
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

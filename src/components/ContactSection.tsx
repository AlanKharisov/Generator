import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Send } from "lucide-react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      message: e.currentTarget.message.value,
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
      setTimeout(() => setIsSuccess(false), 5000);
      e.currentTarget.reset();
    } catch (err) {
      alert("Помилка при відправці: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Зв'яжіться з нами</h2>
          <p className="text-lg text-gray-600">
            Залиште заявку на ремонт або отримайте безкоштовну консультацію по телефону.
          </p>
        </div>

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
              <Textarea name="message" label="Повідомлення (необов'язково)" placeholder="Опишіть проблему..." rows={4} />
              <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                <Send className="mr-2 h-4 w-4" /> Надіслати заявку
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}


import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

// Повністю контрольована кнопка
function Button({ children, isLoading = false, ...props }: any) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-lg bg-orange-500 text-white px-6 h-11 text-base transition-all disabled:opacity-50 disabled:pointer-events-none"
      disabled={isLoading}
      {...props}
    >
      {isLoading && <span className="mr-2 animate-spin">⏳</span>}
      {children}
    </button>
  );
}

// Контролюваний Input
function Input({ label, ...props }: any) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        className="flex h-11 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        {...props}
      />
    </div>
  );
}

// Контролювана Textarea
function Textarea({ label, ...props }: any) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <textarea
        className="flex min-h-[120px] w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        {...props}
      />
    </div>
  );
}

// Головний компонент ContactSection
export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Оновлення state при зміні інпутів
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Відправка форми
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://generator-contact.alankharisov1.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error(err);
      alert("Помилка при відправці, спробуйте ще раз");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Зв'яжіться з нами
        </h2>

        {isSuccess ? (
          <div className="text-center text-green-600">
            <p className="text-xl font-bold">Дякуємо!</p>
            <p>Ваша заявка прийнята. Ми зв'яжемося з вами найближчим часом.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              name="name"
              label="Ваше ім'я"
              placeholder="Олександр"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              label="Телефон або Email"
              placeholder="+38 (0__) ___-__-__ / email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              label="Повідомлення (необов'язково)"
              placeholder="Опишіть вашу проблему..."
              value={formData.message}
              onChange={handleChange}
            />
            <Button type="submit" isLoading={isSubmitting}>
              <Send className="mr-2 h-4 w-4" />
              Надіслати заявку
            </Button>
          </form>
        )}

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <Phone className="h-6 w-6 text-orange-500 mr-2" />
            <div>
              <p className="font-medium">Телефон</p>
              <p>+38 (000) 000-00-00</p>
            </div>
          </div>
          <div className="flex items-start">
            <MessageCircle className="h-6 w-6 text-blue-500 mr-2" />
            <div>
              <p className="font-medium">Telegram / Viber</p>
              <p>@GeneratorService</p>
            </div>
          </div>
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-gray-500 mr-2" />
            <div>
              <p className="font-medium">Email</p>
              <p>info@example.com</p>
            </div>
          </div>
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-gray-500 mr-2" />
            <div>
              <p className="font-medium">Майстерня</p>
              <p>м. Київ, вул. Промислова, 12</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    const formData = {
      name: e.currentTarget.name?.value,
      contact: e.currentTarget.contact?.value, // замість email
      message: e.currentTarget.message?.value,
    };

    console.log("Submitting formData:", formData); // Лог в консолі браузера

    try {
      const res = await fetch("https://generator-contact.alankharisov1.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Worker error:", text);
        throw new Error("Failed to send");
      }

      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Error sending form:", err);
      setErrorMsg("Помилка при відправці, спробуйте ще раз");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg text-gray-600">
            Залиште заявку на ремонт або отримайте безкоштовну консультацію.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Контакти */}
          <div className="flex flex-col justify-between space-y-8">
            <ContactInfo icon={Phone} title="Телефон" text="Щодня з 8:00 до 20:00" link="tel:+380000000000" display="+38 (000) 000-00-00" color="orange" />
            <ContactInfo icon={MessageCircle} title="Telegram / Viber" text="Пишіть нам 24/7" link="#" display="@GeneratorService" color="blue" />
            <ContactInfo icon={Mail} title="Email" text="Для комерційних пропозицій" link="mailto:info@example.com" display="info@example.com" color="gray" />
            <ContactInfo icon={MapPin} title="Майстерня" text="м. Київ, вул. Промислова, 12 (за записом)" />
          </div>

          {/* Форма */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Замовити дзвінок</h3>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-[300px] text-center animate-in fade-in zoom-in duration-300">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Дякуємо!</h4>
                <p className="text-gray-600">Ваша заявка прийнята. Ми зв'яжемося з вами найближчим часом.</p>
                <Button variant="outline" className="mt-6" onClick={() => setIsSuccess(false)}>Надіслати ще</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input name="name" label="Ваше ім'я" placeholder="Олександр" required />
                <Input name="contact" label="Телефон або Email" placeholder="+38 (0__) ___-__-__ або test@mail.com" required />
                <Textarea name="message" label="Повідомлення (необов'язково)" placeholder="Опишіть проблему..." rows={4} />
                {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
                <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
                  <Send className="mr-2 h-4 w-4" /> Надіслати заявку
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon: Icon, title, text, link, display, color }: { icon: any, title: string, text: string, link?: string, display?: string, color?: 'orange'|'blue'|'gray'}) {
  const bgColor = color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  'bg-gray-200 text-gray-700';
  return (
    <div className="flex items-start">
      <div className={`flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center ${bgColor}`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="ml-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{text}</p>
        {link && display && <a href={link} className={`text-lg font-medium hover:text-${color}-600 transition-colors`}>{display}</a>}
      </div>
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Send } from 'lucide-react';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // Беремо дані форми через FormData
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('https://generator-contact.alankharisov1.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Обов'язково JSON
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Worker помилка: ${res.status} ${text}`);
      }

      setIsSuccess(true);
      form.reset(); // Очищаємо форму після успіху
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Помилка при відправці. Спробуйте ще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Зв'яжіться з нами</h2>

        {isSuccess && (
          <div className="mb-6 p-4 bg-green-100 rounded">
            Заявка успішно надіслана! Ми зв'яжемося з вами найближчим часом.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <Input name="name" label="Ваше ім'я" required />
          <Input name="email" label="Телефон або Email" required />
          <Textarea name="message" label="Повідомлення (необов'язково)" rows={4} />

          {errorMsg && <p className="text-red-500">{errorMsg}</p>}

          <Button type="submit" isLoading={isSubmitting} className="w-full">
            <Send className="mr-2 h-4 w-4" />
            Надіслати заявку
          </Button>
        </form>
      </div>
    </section>
  );
}

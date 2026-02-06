import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    try {
      const res = await fetch('https://YOUR_BACKEND_URL/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error('Send failed');
      }

      setIsSuccess(true);
      form.reset();

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Не вдалося відправити заявку. Спробуйте ще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Зв&apos;яжіться з нами
          </h2>
          <p className="text-lg text-gray-600">
            Залиште заявку на ремонт або отримайте безкоштовну консультацію.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* CONTACT INFO */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <InfoItem
                icon={<Phone className="h-6 w-6" />}
                title="Телефон"
                text="Телефонуйте щодня з 8:00 до 20:00"
                value="+38 (000) 000-00-00"
                href="tel:+380000000000"
              />

              <InfoItem
                icon={<MessageCircle className="h-6 w-6" />}
                title="Telegram / Viber"
                text="Пишіть нам 24/7"
                value="@GeneratorService"
              />

              <InfoItem
                icon={<Mail className="h-6 w-6" />}
                title="Email"
                text="Для комерційних пропозицій"
                value="info@example.com"
                href="mailto:info@example.com"
              />

              <InfoItem
                icon={<MapPin className="h-6 w-6" />}
                title="Майстерня"
                text="м. Київ, вул. Промислова, 12"
              />
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                Працюємо по області
              </h4>
              <p className="text-sm text-gray-600">
                Виїжджаємо в радіусі 50 км. Вартість — індивідуально.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Замовити дзвінок
            </h3>

            {isSuccess ? (
              <SuccessBlock onReset={() => setIsSuccess(false)} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  name="name"
                  label="Ваше ім'я"
                  placeholder="Олександр"
                  required
                />

                <Input
                  name="phone"
                  label="Телефон"
                  type="tel"
                  placeholder="+38 (0__) ___-__-__"
                  required
                />

                <Textarea
                  name="message"
                  label="Повідомлення (необовʼязково)"
                  placeholder="Опишіть проблему з генератором..."
                  rows={4}
                />

                {error && (
                  <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  isLoading={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Надіслати заявку
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

/* ===== helpers ===== */

function InfoItem({
  icon,
  title,
  text,
  value,
  href
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  value?: string;
  href?: string;
}) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
        {icon}
      </div>
      <div className="ml-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{text}</p>
        {value && (
          <a
            href={href}
            className="text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors"
          >
            {value}
          </a>
        )}
      </div>
    </div>
  );
}

function SuccessBlock({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-[300px] text-center animate-in fade-in zoom-in duration-300">
      <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <CheckCircle2 className="h-8 w-8 text-green-600" />
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">Дякуємо!</h4>
      <p className="text-gray-600">
        Ваша заявка прийнята. Ми звʼяжемося з вами найближчим часом.
      </p>
      <Button variant="outline" className="mt-6" onClick={onReset}>
        Надіслати ще
      </Button>
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

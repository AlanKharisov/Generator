import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg text-gray-600">
            Залиште заявку на ремонт або отримайте безкоштовну консультацію по
            телефону.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Телефон
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Телефонуйте нам щодня з 8:00 до 20:00
                  </p>
                  <a
                    href="tel:+380000000000"
                    className="text-xl font-semibold text-orange-600 hover:text-orange-700 transition-colors">

                    +38 (000) 000-00-00
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Telegram / Viber
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Пишіть нам у месенджери 24/7
                  </p>
                  <a
                    href="#"
                    className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">

                    @GeneratorService
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-700">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Для комерційних пропозицій
                  </p>
                  <a
                    href="mailto:info@example.com"
                    className="text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors">

                    info@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-700">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Майстерня
                  </h3>
                  <p className="text-gray-600">
                    м. Київ, вул. Промислова, 12
                    <br />
                    (за попереднім записом)
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder or Additional Info */}
            <div className="mt-10 p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                Працюємо по області
              </h4>
              <p className="text-sm text-gray-600">
                Виїжджаємо у всі райони міста та населені пункти області в
                радіусі 50 км. Вартість виїзду розраховується індивідуально.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Замовити дзвінок
            </h3>

            {isSuccess ?
            <div className="flex flex-col items-center justify-center h-[300px] text-center animate-in fade-in zoom-in duration-300">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Дякуємо!
                </h4>
                <p className="text-gray-600">
                  Ваша заявка прийнята. Ми зв'яжемося з вами найближчим часом.
                </p>
                <Button
                variant="outline"
                className="mt-6"
                onClick={() => setIsSuccess(false)}>

                  Надіслати ще
                </Button>
              </div> :

            <form onSubmit={handleSubmit} className="space-y-5">
                <Input label="Ваше ім'я" placeholder="Олександр" required />
                <Input
                label="Телефон"
                type="tel"
                placeholder="+38 (0__) ___-__-__"
                required />

                <Textarea
                label="Повідомлення (необов'язково)"
                placeholder="Опишіть проблему з генератором..."
                rows={4} />

                <Button
                type="submit"
                className="w-full"
                size="lg"
                isLoading={isSubmitting}>

                  <Send className="mr-2 h-4 w-4" />
                  Надіслати заявку
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Натискаючи кнопку, ви погоджуєтесь на обробку персональних
                  даних
                </p>
              </form>
            }
          </div>
        </div>
      </div>
    </section>);

}
// Helper component for success state
function CheckCircle2({ className }: {className?: string;}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>

      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>);

}
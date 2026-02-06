import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'

const API_URL = 'https://generator-contact.alankharisov1.workers.dev/send'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      message: formData.get('message')
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Network error')

      setIsSuccess(true)
      form.reset()

      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      setError('Помилка відправки. Спробуйте пізніше.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg text-gray-600">
            Залиште заявку на ремонт або отримайте безкоштовну консультацію
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* INFO */}
          <div className="space-y-8">
            <InfoItem icon={<Phone />} title="Телефон" text="+38 (000) 000-00-00" />
            <InfoItem icon={<MessageCircle />} title="Telegram" text="@GeneratorService" />
            <InfoItem icon={<Mail />} title="Email" text="info@example.com" />
            <InfoItem icon={<MapPin />} title="Адреса" text="м. Київ, вул. Промислова, 12" />
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
                <Input name="name" label="Ваше ім'я" required />
                <Input name="phone" label="Телефон" type="tel" required />
                <Textarea name="message" label="Повідомлення" rows={4} />

                {error && <p className="text-sm text-red-600">{error}</p>}

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  isLoading={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Надіслати заявку
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

/* helpers */

function InfoItem({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-orange-100 text-orange-600">
        {icon}
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

function SuccessBlock({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-20">
      <h4 className="text-xl font-bold mb-2">Дякуємо!</h4>
      <p className="text-gray-600 mb-6">
        Ми зв'яжемося з вами найближчим часом
      </p>
      <Button variant="outline" onClick={onReset}>
        Надіслати ще
      </Button>
    </div>
  )
}

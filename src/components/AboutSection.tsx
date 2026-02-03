import React from 'react';
import { Check } from 'lucide-react';
export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                alt="Technician repairing generator"
                className="w-full h-full object-cover aspect-[4/3]" />

              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-500 rounded-2xl -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-gray-100 rounded-2xl -z-10 hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
              Про компанію
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ми повертаємо світло у ваші домівки та бізнес
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Компанія «ГенераторСервіс» спеціалізується на професійному ремонті
              та обслуговуванні енергетичного обладнання. Ми розуміємо,
              наскільки критичною може бути відсутність електроенергії, тому
              працюємо швидко та якісно.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Наші майстерні обладнані сучасним діагностичним устаткуванням, що
              дозволяє точно виявляти несправності. Ми працюємо як з приватними
              клієнтами, так і з великими підприємствами.
            </p>

            <ul className="space-y-4">
              {[
              'Сертифіковані майстри з досвідом',
              'Власний склад запчастин',
              'Обслуговування всіх популярних брендів',
              'Прозоре ціноутворення без прихованих платежів'].
              map((item, i) =>
              <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}
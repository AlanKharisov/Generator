import React from 'react';
import { Search, Wrench, Settings, Truck, ArrowRight } from 'lucide-react';
const services = [
{
  icon: Search,
  title: 'Діагностика',
  description:
  'Повна перевірка всіх систем генератора, виявлення несправностей та оцінка вартості ремонту.'
},
{
  icon: Wrench,
  title: 'Ремонт генераторів',
  description:
  'Капітальний та поточний ремонт бензинових та дизельних двигунів, заміна зношених деталей.'
},
{
  icon: Settings,
  title: 'Технічне обслуговування',
  description:
  'Регулярна заміна мастила, фільтрів, свічок запалювання та налаштування систем для стабільної роботи.'
},
{
  icon: Truck,
  title: 'Виїзд майстра',
  description:
  "Оперативний виїзд фахівця на об'єкт для діагностики та дрібного ремонту на місці."
}];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наші послуги
          </h2>
          <p className="text-lg text-gray-600">
            Ми надаємо повний спектр послуг для забезпечення безперебійної
            роботи вашого енергообладнання.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) =>
          <div
            key={index}
            className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1">

              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center text-orange-500 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                Детальніше <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}
import React from 'react';
import { Award, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
const advantages = [
{
  icon: Award,
  title: '10+ років досвіду',
  description:
  'Наша команда складається з сертифікованих професіоналів з багаторічним стажем.'
},
{
  icon: ShieldCheck,
  title: 'Гарантія на роботи',
  description:
  'Ми впевнені в якості наших послуг, тому надаємо офіційну гарантію на всі види робіт.'
},
{
  icon: Clock,
  title: 'Швидкий виїзд',
  description:
  'Розуміємо важливість електропостачання, тому реагуємо на виклики максимально оперативно.'
},
{
  icon: CheckCircle2,
  title: 'Якісні запчастини',
  description:
  'Використовуємо лише оригінальні запчастини або перевірені якісні аналоги.'
}];

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((item, index) =>
          <div
            key={index}
            className="flex flex-col items-center text-center md:items-start md:text-left">

              <div className="mb-6 p-3 rounded-2xl bg-gray-800 text-orange-500 inline-block">
                <item.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}
import React from 'react';
import { Zap, Facebook, Instagram, Send } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="p-1.5 rounded bg-orange-500 text-white">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Генератор<span className="text-orange-500">Сервіс</span>
              </span>
            </a>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Професійний ремонт та обслуговування генераторів. Надійність,
              якість та оперативність - наші головні пріоритети.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">

                <Send className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">

                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">

                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Навігація</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-orange-500 transition-colors">

                  Послуги
                </a>
              </li>
              <li>
                <a
                  href="#advantages"
                  className="text-gray-400 hover:text-orange-500 transition-colors">

                  Переваги
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-orange-500 transition-colors">

                  Про компанію
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-orange-500 transition-colors">

                  Контакти
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Послуги</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors">

                  Діагностика
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors">

                  Ремонт двигунів
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors">

                  Технічне обслуговування
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors">

                  Запчастини
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Short */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Контакти</h3>
            <ul className="space-y-3 text-gray-400">
              <li>м. Київ, вул. Промислова, 12</li>
              <li>
                <a
                  href="tel:+380000000000"
                  className="hover:text-orange-500 transition-colors">

                  +38 (000) 000-00-00
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@example.com"
                  className="hover:text-orange-500 transition-colors">

                  info@example.com
                </a>
              </li>
              <li className="text-sm text-gray-500 pt-2">
                Пн-Нд: 8:00 - 20:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} ГенераторСервіс. Всі права
            захищено.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Політика конфіденційності
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Умови використання
            </a>
          </div>
        </div>
      </div>
    </footer>);

}
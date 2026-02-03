import React, { useEffect, useState } from 'react';
import { Menu, X, Phone, Zap } from 'lucide-react';
import { Button } from './ui/Button';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Послуги',
    href: '#services'
  },
  {
    name: 'Переваги',
    href: '#advantages'
  },
  {
    name: 'Про нас',
    href: '#about'
  },
  {
    name: 'Контакти',
    href: '#contact'
  }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-orange-500 text-white' : 'bg-white text-orange-500'}`}>

              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>

              Генератор<span className="text-orange-500">Сервіс</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>

                {link.name}
              </a>
            )}
            <Button
              variant={isScrolled ? 'primary' : 'outline'}
              size="sm"
              className={!isScrolled ? 'border-white/30 hover:bg-white/10' : ''}
              onClick={() => window.location.href = 'tel:+380000000000'}>

              <Phone className="mr-2 h-4 w-4" />
              Зателефонувати
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">

            {isOpen ?
            <X
              className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} /> :


            <Menu
              className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />

            }
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen &&
      <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) =>
        <a
          key={link.name}
          href={link.href}
          className="text-gray-600 font-medium py-2 hover:text-orange-500 transition-colors"
          onClick={() => setIsOpen(false)}>

              {link.name}
            </a>
        )}
          <Button
          className="w-full justify-center"
          onClick={() => window.location.href = 'tel:+380000000000'}>

            <Phone className="mr-2 h-4 w-4" />
            Зателефонувати
          </Button>
        </div>
      }
    </nav>);

}
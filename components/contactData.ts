import { Mail, MessageCircle, Phone, type LucideIcon } from 'lucide-react';

export type ContactMethod = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  description: string;
  color: string;
};

export const contactMethods: ContactMethod[] = [
  {
    icon: MessageCircle,
    label: 'Line',
    value: '@yourline',
    href: 'https://line.me/ti/p/@yourline',
    description: 'เหมาะสำหรับคุยรายละเอียดและขอราคาเบื้องต้น',
    color: 'bg-green-500 hover:bg-green-600'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@example.com',
    href: 'mailto:info@example.com',
    description: 'ส่ง brief หรือรายละเอียดโปรเจกต์มาได้โดยตรง',
    color: 'bg-slate-700 hover:bg-slate-800'
  },
  {
    icon: Phone,
    label: 'โทร',
    value: '02-XXX-XXXX',
    href: 'tel:02XXXXXXX',
    description: 'สะดวกคุยเร็ว โทรเข้ามาได้ในเวลาทำการ',
    color: 'bg-blue-600 hover:bg-blue-700'
  }
];

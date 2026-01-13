// src/components/layout/sidebar.tsx
'use client';

import React, { useState } from 'react';
// 移除未使用的 cn 导入
// import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Code2,
  Globe,
  Package,
  Settings,
  FileCode,
  Database,
  Palette,
  Wrench,
} from 'lucide-react';

const sidebarItems = [
  {
    title: '开发工具',
    items: [
      { icon: Code2, label: '代码编辑器', href: '/editor' },
      { icon: Globe, label: 'API客户端', href: '/api-client' },
      { icon: FileCode, label: '代码片段', href: '/snippets' },
      { icon: Database, label: 'JSON工具', href: '/json' },
    ],
  },
  {
    title: '设计工具',
    items: [
      { icon: Package, label: '组件实验室', href: '/components' },
      { icon: Palette, label: '颜色工具', href: '/colors' },
      { icon: Wrench, label: 'CSS生成器', href: '/css' },
    ],
  },
  {
    title: '系统',
    items: [
      { icon: Settings, label: '设置', href: '/settings' },
    ],
  },
];

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;  // 添加 onClick 属性
}

function SidebarItem({ 
  icon: Icon, 
  label, 
  href, 
  isActive,
  onClick  // 接收 onClick
}: SidebarItemProps) {
  return (
    <Button
      variant={isActive ? 'secondary' : 'ghost'}
      className="w-full justify-start"
      asChild
      onClick={onClick}  // 添加 onClick
    >
      <a href={href}>
        <Icon className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState('/editor');

  return (
    <aside className="hidden w-64 border-r bg-background md:block">
      <ScrollArea className="h-[calc(100vh-3.5rem)]">
        <div className="space-y-4 py-4">
          {sidebarItems.map((section) => (
            <div key={section.title} className="px-3">
              <h3 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.href}
                    {...item}
                    isActive={activeItem === item.href}
                    onClick={() => setActiveItem(item.href)}  // 现在可以正常传递
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </aside>
  );
}

// src/components/layout/header.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sun, Moon, Menu, Bell, User } from 'lucide-react';
import { useTheme } from 'next-themes';

export function AppHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <span className="hidden font-bold sm:inline-block">DevStack</span>
          </a>
        </div>

        {/* 移动端菜单按钮 */}
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium md:hidden">
          <Menu className="h-4 w-4" />
        </button>

        {/* 搜索框 */}
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="搜索工具或功能..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>

        {/* 右侧操作区 */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">切换主题</span>
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">通知</span>
          </Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">用户</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
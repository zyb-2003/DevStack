// src/app/page.tsx
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">DevStack</h1>
        <p className="text-muted-foreground">
          一站式开发者工具平台
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>代码编辑器</CardTitle>
            <CardDescription>
              智能代码编辑与执行环境
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>支持多种语言的代码编辑、执行和调试</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API测试工具</CardTitle>
            <CardDescription>
              功能强大的HTTP客户端
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>发送HTTP请求，测试API接口</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>组件实验室</CardTitle>
            <CardDescription>
              可视化组件开发与测试
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>实时预览和调试React组件</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
// src/app/routes.tsx
import { Suspense, lazy } from 'react';  // ✅ 移除未使用的 React
import { Routes, Route } from 'react-router-dom';
import HomePage from './page';
import LoadingSpinner from '@/components/ui/loading-spinner';

// 懒加载路由组件 - 修复路径
const CodeEditorPage = lazy(() => import('@/features/code-editor/pages/editor-page'));
const ApiClientPage = lazy(() => import('@/features/api-client/pages/api-client-page'));
const ComponentLabPage = lazy(() => import('@/features/component-lab/pages/component-lab-page'));
const SettingsPage = lazy(() => import('@/features/settings/pages/settings-page'));
const NotFoundPage = lazy(() => import('@/app/not-found'));

export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<CodeEditorPage />} />
        <Route path="/api-client" element={<ApiClientPage />} />
        <Route path="/components" element={<ComponentLabPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
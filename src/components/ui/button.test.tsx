// src/components/ui/button.test.tsx
//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';
import { describe, it, expect, vi } from 'vitest';

describe('Button组件', () => {
  it('正确渲染按钮文本', () => {
    render(<Button>点击我</Button>);
    expect(screen.getByText('点击我')).toBeInTheDocument();
  });

  it('点击时触发onClick事件', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>按钮</Button>);
    
    fireEvent.click(screen.getByText('按钮'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('禁用状态下不可点击', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        禁用按钮
      </Button>
    );
    
    fireEvent.click(screen.getByText('禁用按钮'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
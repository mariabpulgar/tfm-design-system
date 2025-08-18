import React from 'react';
import SimpleCard from '../components/SimpleCard';
import '../App.css'; // Importa los estilos de App.jsx

const meta = {
  title: 'Components/SimpleCard',
  component: SimpleCard,
  decorators: [
    (Story) => (
      <div style={{ 
        fontFamily: 'var(--font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif)',
        fontSize: 'var(--font-size-base, 14px)',
        lineHeight: 'var(--line-height-base, 1.5)',
        padding: '20px'
      }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile card component with horizontal and vertical variants. Features hover states with border and background changes.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { 
        type: 'radio'
      },
      options: ['horizontal', 'vertical'],
      description: 'Card layout orientation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' }
      }
    },
    title: {
      control: { 
        type: 'text' 
      },
      description: 'Card title text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Card' }
      }
    },
    description: {
      control: { 
        type: 'text' 
      },
      description: 'Card description text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Lorem ipsum dolor sit amet.' }
      }
    },
  },
};

export default meta;

// Default story
export const Default = {
  args: {
    variant: 'horizontal',
    title: 'Card',
    description: 'Lorem ipsum dolor sit amet.',
  },
};

// Horizontal variant
export const Horizontal = {
  args: {
    variant: 'horizontal',
    title: 'Horizontal Card',
    description: 'This is a horizontal card with a longer description to show how text wraps in this layout.',
  },
};

// Vertical variant
export const Vertical = {
  args: {
    variant: 'vertical',
    title: 'Vertical Card',
    description: 'This is a vertical card with a description that demonstrates the vertical layout.',
  },
};

// Short content examples
export const HorizontalShort = {
  args: {
    variant: 'horizontal',
    title: 'Short',
    description: 'Brief text.',
  },
};

export const VerticalShort = {
  args: {
    variant: 'vertical',
    title: 'Short',
    description: 'Brief text.',
  },
};

// Long content examples
export const HorizontalLong = {
  args: {
    variant: 'horizontal',
    title: 'This is a Very Long Title That Might Wrap',
    description: 'This is a much longer description that will definitely wrap to multiple lines and show how the card handles longer content in horizontal layout.',
  },
};

export const VerticalLong = {
  args: {
    variant: 'vertical',
    title: 'This is a Very Long Title That Might Wrap',
    description: 'This is a much longer description that will definitely wrap to multiple lines and show how the card handles longer content in vertical layout.',
  },
};

// All variants showcase
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
      <SimpleCard 
        variant="horizontal" 
        title="Horizontal Card" 
        description="This card uses horizontal layout." 
      />
      <SimpleCard 
        variant="vertical" 
        title="Vertical Card" 
        description="This card uses vertical layout." 
      />
    </div>
  ),
};
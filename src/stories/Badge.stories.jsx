import Badge from '../components/molecules/Badge';
import '../components/molecules/Badge.css'

export default {
  title: 'Molecules/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A notification badge component that displays counts or indicators on icons. Supports numeric counts with overflow handling, dot indicators, and conditional visibility.',
      },
    },
  },
  argTypes: {
    count: {
      control: { type: 'number', min: 0, max: 999 },
      description: 'The number to display in the badge',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: { type: 'number', min: 1, max: 999 },
      description: 'Maximum number to display before showing "+"',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '99' },
      },
    },
    showZero: {
      control: 'boolean',
      description: 'Whether to show the badge when count is 0',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Show as a dot indicator without displaying the count',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to display the notification icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
};

// Default story
export const Default = {
  tags: ['autodocs'],
  args: {
    count: 5,
    showIcon: true,
  },
};

// With Icon
export const WithIcon = {
  tags: ['autodocs'],
  args: {
    count: 10,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge displayed with the notification icon.',
      },
    },
  },
};

// Without Icon
export const WithoutIcon = {
  tags: ['autodocs'],
  args: {
    count: 3,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge displayed without the notification icon - useful for applying to other elements.',
      },
    },
  },
};

// High Count (with overflow)
export const HighCount = {
  tags: ['autodocs'],
  args: {
    count: 150,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'When count exceeds the max value (99), it displays "99+".',
      },
    },
  },
};

// Custom Max Value
export const CustomMax = {
  tags: ['autodocs'],
  args: {
    count: 25,
    max: 20,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom maximum value before showing overflow indicator.',
      },
    },
  },
};

// Dot Indicator
export const DotIndicator = {
  tags: ['autodocs'],
  args: {
    dot: true,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Dot indicator without count - useful for showing "has notifications" without specific numbers.',
      },
    },
  },
};

// Zero Count (Hidden)
export const ZeroCountHidden = {
  tags: ['autodocs'],
  args: {
    count: 0,
    showZero: false,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'By default, badge is hidden when count is 0.',
      },
    },
  },
};

// Zero Count (Shown)
export const ZeroCountShown = {
  tags: ['autodocs'],
  args: {
    count: 0,
    showZero: true,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Badge can be configured to show even when count is 0.',
      },
    },
  },
};

// Edge Cases
export const EdgeCases = {
  tags: ['autodocs'],
  render: () => (
    <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
      <div style={{ textAlign: 'center' }}>
        <Badge count={1} showIcon />
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>Single digit</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge count={99} showIcon />
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>Max value</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge count={100} showIcon />
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>Overflow</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge count={999} max={500} showIcon />
        <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>Custom max</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various edge cases and boundary values.',
      },
    },
  },
};

// Interactive Playground
export const Playground = {
  tags: ['autodocs'],
  args: {
    count: 5,
    max: 99,
    showZero: false,
    dot: false,
    showIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different prop combinations.',
      },
    },
  },
};
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('test harness smoke test', () => {
  it('renders a React element and runs jest-dom matchers', () => {
    render(<div>moon</div>)
    expect(screen.getByText('moon')).toBeInTheDocument()
  })
})

// @ts-nocheck
import { render, screen, fireEvent } from '@testing-library/react'
import Projects from '../components/Projects'

describe('Projects component', () => {
  it('renders project cards and opens modal on Enter', async () => {
    render(<Projects />)
    const cards = await screen.findAllByRole('button')
    expect(cards.length).toBeGreaterThan(0)
    // focus first card and press Enter
    cards[0].focus()
    fireEvent.keyDown(cards[0], { key: 'Enter', code: 'Enter' })
    // modal should appear (check for Project modal title text)
    const modalTitle = await screen.findByRole('heading', { level: 2 })
    expect(modalTitle).toBeInTheDocument()
  })
})

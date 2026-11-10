// Colours are CSS variables (see input.css) so light/dark switch via <html data-theme> without `dark:` on every class.
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', surface: 'var(--surface)', tile: 'var(--tile)', fg: 'var(--fg)',
        muted: 'var(--muted)', line: 'var(--line)', accent: 'var(--accent)', accent2: 'var(--accent2)', soft: 'var(--accent-soft)',
        on: 'var(--on)', danger: 'var(--danger)'
      },
      boxShadow: { card: 'var(--shadow)', glow: 'var(--glow)', ring: '0 0 0 4px var(--ring)' },
      animation: { rise: 'rise .35s cubic-bezier(.2,.8,.2,1) backwards' }   // "backwards", not "both": a lasting transform would fight the drag animation
    }
  }
};

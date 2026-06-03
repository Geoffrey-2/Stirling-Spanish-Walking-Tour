export default function Footer() {
  return (
    <footer
      style={{
        background: '#120d05',
        padding: '48px 24px',
        textAlign: 'center',
        color: '#9a8e7e',
        fontSize: '14px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-playfair), Georgia, serif',
          fontSize: '20px',
          color: '#f5efe0',
          marginBottom: '16px',
        }}
      >
        Old Town Jail, Stirling
      </p>
      <p>St John Street &middot; Stirling &middot; FK8 1EA</p>
      <p style={{ marginTop: '8px' }}>
        <a
          href="https://www.oldtownjail.co.uk"
          style={{ color: '#c8922a', textDecoration: 'none' }}
        >
          oldtownjail.co.uk
        </a>
      </p>
      <p style={{ marginTop: '20px', color: '#4a3f2e', fontSize: '13px' }}>
        Parte de Dot Dash Holdings &middot; &copy; 2026
      </p>
    </footer>
  )
}

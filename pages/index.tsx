import Link from 'next/link'

export default function Page() {
  return <div style={{
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <ul style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      <li>
        <Link href="/ssr">page router</Link>
      </li>
    </ul>
  </div>
}

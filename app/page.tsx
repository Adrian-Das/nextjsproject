import Link from 'next/link'

export default function HomePage() {
    return (
        <>
            <div>Welcome to Next.js!</div>
            <Link href="/user">User</Link>
        </>
    )
}
import Link from 'next/link';

export default function Nav() {
    return (
        <nav>
            <Link href="/products">Products</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/order">Order</Link>
            <Link href="/account">Account</Link>
        </nav>
    );
}

//use nextjs Link tag for pages within your app,
//use regular a tag for links leading outside your website
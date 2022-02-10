import Link from 'next/link';
import NavStyles from './styles/NavStyles';

export default function Nav() {
    return (
        <NavStyles>
            <Link href="/products">Products</Link>
            <Link href="/sell">Sell</Link>
            <Link href="/order">Order</Link>
            <Link href="/account">Account</Link>
        </NavStyles>
    );
}

//use nextjs Link tag for pages within your app,
//use regular a tag for links leading outside your website
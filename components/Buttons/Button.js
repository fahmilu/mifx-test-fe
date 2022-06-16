import Link from "next/link";

const Button = ({children, style}) => {
    return (
        <Link href={``}>
            <a href={``} className={`px-5 py-3 rounded font-bold text-sm flex justify-center items-center transition-all ${style}`}>{children}</a>
        </Link>
    );
}

export default Button;
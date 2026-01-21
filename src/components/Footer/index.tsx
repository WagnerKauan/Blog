import Link from "next/link";



export function Footer() {
  

  return (
    <footer className="pb-16">
      <p className="text-center">Copyright &copy; {new Date().getFullYear()} - <Link className="hover:text-blue-700" href={'/'}>The Blog</Link></p>
    </footer>
  );
}
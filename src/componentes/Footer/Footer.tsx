import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-judbr-gray-dark text-white w-full py-6 bottom-0">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm mb-4 md:mb-0">
                        <p>Copyright © 2024 JudBR. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/termos-de-uso" className="text-sm hover:underline">
                            Termo de uso
                        </Link>
                        <Link href="/politica-de-privacidade" className="text-sm hover:underline">
                            Política de privacidade
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
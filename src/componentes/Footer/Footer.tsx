import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-judbr-gray-dark text-white w-full py-6 bottom-0">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
                    <div className="col-span-4 grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div>
                            <h3 className="font-semibold mb-3">Produtos</h3>
                            <div className="flex flex-col space-y-2">
                                <Link href="/" className="text-sm hover:underline">Sistema JudBR</Link>
                                <Link href="/" className="text-sm hover:underline">Lorem</Link>

                                <Link 
                                    href="https://app.judbr.com.br/auth/register/"
                                    target="_blank" 
                                    className="text-sm text-white transition-all duration-300 ease-in-out hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1"
                                >
                                    Inicie uma avaliação gratuita
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Soluções</h3>
                            <div className="flex flex-col space-y-2">
                                <Link href="/" className="text-sm hover:underline">Lorem</Link>
                                <Link href="/" className="text-sm hover:underline">Lorem</Link>
                                <Link 
                                    href="/#solucoes" 
                                    className="text-sm text-white transition-all duration-300 ease-in-out hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1"
                                >
                                    Saiba mais
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Recursos</h3>
                            <div className="flex flex-col space-y-2">
                            <Link href="/#solucoes" className="text-sm hover:underline">Suporte</Link>
                            <Link href="/#solucoes" className="text-sm hover:underline">Funcionalidades</Link> 
                            <Link 
                                    href="/#solucoes" 
                                    className="text-sm text-white transition-all duration-300 ease-in-out hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1"
                                >
                                    Assista uma demonstração
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
 
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Empresa</h3>
                            <div className="flex flex-col space-y-2">
                                <Link href="/pages/QuemSomos" className="text-sm hover:underline">Quem Somos</Link>
                                <Link href="/pages/QuemSomos" className="text-sm hover:underline">Nossa Liderança</Link>
                                <Link href="/pages/IndicacoesClientes" className="text-sm hover:underline">Indicações de Clientes</Link>
                                <Link 
                                    href="/#solucoes" 
                                    className="text-sm text-white transition-all duration-300 ease-in-out hover:text-blue-400 hover:translate-x-1 inline-flex items-center gap-1"
                                >
                                    Fale Conosco
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold mb-3">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:opacity-80">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </Link>
                            <Link href="#" className="hover:opacity-80">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>
                            <Link href="#" className="hover:opacity-80">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
                    <div className="text-sm mb-4 md:mb-0">
                        <p>Copyright © 2024 JudBR. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/termos-de-uso" className="text-sm hover:underline">
                            Termos de uso
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
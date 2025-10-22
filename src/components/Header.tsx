'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-white">WAI</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Invest
            </span>
          </div>
        </Link>

        {/* 네비게이션 & 로그인 버튼 */}
        <div className="flex items-center gap-4">
          {!isLoginPage && (
            <Link
              href="/login"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2.5 font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10">로그인</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}


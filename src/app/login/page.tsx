'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    // TODO: 실제 Google OAuth 연동
    console.log('Google 로그인 시작...');
    
    // 나중에 구현할 로직:
    // const { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: 'google',
    //   options: {
    //     redirectTo: `${window.location.origin}/auth/callback`,
    //   },
    // });
    
    // 임시: 3초 후 로딩 해제
    setTimeout(() => {
      setIsLoading(false);
      alert('Google 로그인 연동 준비 중입니다.');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="w-full max-w-md space-y-8 px-6">
        {/* 로고 & 헤더 */}
        <div className="text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-5xl font-bold">
            <span className="text-white">WAI</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Invest
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white">로그인</h1>
          <p className="mt-2 text-slate-400">
            투자 리스크 관리를 시작하세요
          </p>
        </div>

        {/* 로그인 카드 */}
        <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur">
          <div className="space-y-6">
            {/* Google 로그인 버튼 */}
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className="group relative flex w-full items-center justify-center gap-3 rounded-xl border-2 border-slate-600 bg-white px-6 py-4 font-semibold text-slate-900 transition-all hover:border-slate-500 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-slate-900" />
                  <span>로그인 중...</span>
                </>
              ) : (
                <>
                  {/* Google 아이콘 */}
                  <svg className="h-6 w-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Google로 계속하기</span>
                </>
              )}
            </button>

            {/* 구분선 */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-slate-800/50 px-4 text-slate-500">
                  빠르고 안전한 로그인
                </span>
              </div>
            </div>

            {/* 안내 문구 */}
            <div className="space-y-2 text-center text-sm text-slate-400">
              <p>🔒 Google 계정으로 간편하게 시작하세요</p>
              <p className="text-xs text-slate-500">
                로그인 시 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* 서비스 특징 */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="text-2xl">📊</div>
            <p className="text-xs text-slate-400">실시간<br />리스크 모니터링</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">🎯</div>
            <p className="text-xs text-slate-400">개인화된<br />투자 가이드</p>
          </div>
          <div className="space-y-2">
            <div className="text-2xl">⚡</div>
            <p className="text-xs text-slate-400">빠른<br />의사결정</p>
          </div>
        </div>
      </div>
    </div>
  );
}


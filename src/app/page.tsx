export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <main className="flex max-w-4xl flex-col items-center gap-12 px-6 py-16 text-center">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-6xl font-bold">
            <span className="text-white">WAI</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Invest
            </span>
          </div>
          
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
            오늘 위험한가?<br />
            왜 위험한가?<br />
            나에겐 무엇을 의미하나?
          </h1>
          
          <p className="max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
            투자자를 위한 스마트 리스크 관리 플랫폼<br />
            <span className="text-slate-400">
              핵심 정보는 무료, 해석·개인화·시간절약은 유료
            </span>
          </p>
        </div>

        {/* Risk Mode Demo */}
        <div className="flex w-full max-w-md flex-col gap-4 rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur">
          <div className="text-sm font-medium text-slate-400">오늘의 리스크 모드</div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-3xl">
              🟢
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/20 text-3xl">
              🟡
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/30 text-3xl ring-2 ring-red-500">
              🔴
            </div>
          </div>
          <div className="text-lg font-semibold text-white">
            오늘은 고위험 — 포지션 축소 권장
          </div>
        </div>

        {/* Features */}
        <div className="grid w-full gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-6 backdrop-blur">
            <div className="mb-3 text-3xl">📊</div>
            <h3 className="mb-2 text-lg font-semibold text-white">대시보드</h3>
            <p className="text-sm text-slate-400">실시간 리스크 모니터링</p>
          </div>
          
          <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-6 backdrop-blur">
            <div className="mb-3 text-3xl">📅</div>
            <h3 className="mb-2 text-lg font-semibold text-white">스마트 캘린더</h3>
            <p className="text-sm text-slate-400">주요 경제 이벤트 추적</p>
          </div>
          
          <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-6 backdrop-blur">
            <div className="mb-3 text-3xl">🐋</div>
            <h3 className="mb-2 text-lg font-semibold text-white">슈퍼 팔로우</h3>
            <p className="text-sm text-slate-400">고래 & 애널리스트 추적</p>
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-blue-500/20 px-6 py-2 text-sm font-medium text-blue-300">
            🚀 개발 진행중
          </div>
          <p className="text-sm text-slate-500">
            곧 만나요! Stay tuned for updates.
          </p>
        </div>
      </main>
    </div>
  );
}

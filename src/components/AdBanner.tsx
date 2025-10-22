'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  /**
   * Google AdSense 클라이언트 ID
   * 예: "ca-pub-XXXXXXXXXXXXXXXX"
   */
  adClient?: string;
  /**
   * 광고 슬롯 ID
   */
  adSlot?: string;
  /**
   * 광고 형식
   * 'vertical' - 세로 배너 (160x600)
   * 'horizontal' - 가로 배너 (728x90)
   */
  adFormat?: 'vertical' | 'horizontal';
  /**
   * 플레이스홀더 표시 여부
   */
  showPlaceholder?: boolean;
}

export default function AdBanner({
  adClient,
  adSlot,
  adFormat = 'vertical',
  showPlaceholder = true,
}: AdBannerProps) {
  useEffect(() => {
    // Google AdSense가 로드되면 광고를 푸시
    if (adClient && adSlot && typeof window !== 'undefined') {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [adClient, adSlot]);

  // AdSense가 설정되지 않았으면 플레이스홀더 표시
  if (!adClient || !adSlot) {
    if (!showPlaceholder) return null;
    
    return (
      <div
        className={`
          border-2 border-dashed border-slate-700 rounded-lg bg-slate-800/30 
          flex items-center justify-center text-slate-500 text-xs text-center p-4
          ${adFormat === 'vertical' ? 'h-[600px] w-[160px]' : 'h-[90px] w-full'}
        `}
      >
        광고 영역
        <br />
        {adFormat === 'vertical' ? '(160x600)' : '(728x90)'}
      </div>
    );
  }

  // 실제 Google AdSense 광고
  return (
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
        ...(adFormat === 'vertical' && { width: '160px', height: '600px' }),
        ...(adFormat === 'horizontal' && { width: '728px', height: '90px' }),
      }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat === 'vertical' ? 'vertical' : 'horizontal'}
      data-full-width-responsive="false"
    />
  );
}


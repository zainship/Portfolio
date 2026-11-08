import React, { useEffect, useMemo, useRef } from 'react';
import sourceDocument from './sources/sign-up-button.html?raw';

export interface SignUpButtonProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
}

export const SignUpButton: React.FC<SignUpButtonProps> = ({
  className = '',
  style,
  label = 'SIGN IN',
  onClick,
  width = 310,
  height = 118,
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Customize initial HTML with the desired label
  const htmlDoc = useMemo(() => {
    if (!label || label === 'SIGN IN') {
      return sourceDocument;
    }
    return sourceDocument.replace(
      '<div class="label" id="label">SIGN IN</div>',
      `<div class="label" id="label">${label}</div>`
    );
  }, [label]);

  // Listen to postMessage from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'sign-up-button-click') {
        onClick?.();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onClick]);

  // In case label updates dynamically after mount
  useEffect(() => {
    if (!iframeRef.current?.contentWindow) return;
    try {
      iframeRef.current.contentWindow.postMessage(
        { type: 'set-label', label },
        '*'
      );
    } catch {
      // Ignore cross-origin issues if any
    }
  }, [label]);

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none overflow-visible ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style,
      }}
    >
      <iframe
        ref={iframeRef}
        srcDoc={htmlDoc}
        title={label || 'Sign In Button'}
        className="w-full h-full border-0 bg-transparent overflow-hidden pointer-events-auto"
        sandbox="allow-scripts allow-same-origin"
        scrolling="no"
      />
    </div>
  );
};

export default SignUpButton;

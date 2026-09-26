/* The preview image shown when a Node.law link is shared on LinkedIn, Slack, WhatsApp, etc. */

import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1F3A",
          padding: "72px 80px",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="7" fill="#12294A" />
            <path d="M10 22 16 10l6 12H10Z" fill="none" stroke="#C9A56A" strokeWidth="1.5" />
            <circle cx="16" cy="10" r="2.6" fill="#C9A56A" />
            <circle cx="10" cy="22" r="2.6" fill="#C9A56A" />
            <circle cx="22" cy="22" r="2.6" fill="#F7F1E6" />
          </svg>
          <div style={{ display: "flex", fontSize: 44 }}>
            Node<span style={{ color: "#C9A56A" }}>.law</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 80, height: 2, background: "#C9A56A", marginBottom: 36 }} />
          <div style={{ fontSize: 68, lineHeight: 1.1, maxWidth: 900 }}>
            Legal work, drafted and reviewed with precision.
          </div>
          <div style={{ fontSize: 28, color: "#B8C2D1", marginTop: 28, fontFamily: "sans-serif" }}>
            {site.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}

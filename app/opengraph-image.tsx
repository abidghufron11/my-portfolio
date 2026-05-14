import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abid Ghufron F. - Portfolio Thumbnail";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontFamily: "Courier Prime, monospace",
          padding: "60px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ width: 28, height: 28, background: "#FF6B35", borderRadius: 6 }} />
          <span style={{ fontSize: 26, color: "#FF6B35", fontWeight: 700 }}>abid.dev</span>
        </div>
        
        <h1 style={{ fontSize: 68, fontWeight: 800, margin: 0, textAlign: "center", lineHeight: 1.15 }}>
          Building the future with<br />
          <span style={{ color: "#FF6B35" }}>Scalable Tech & AI</span>
        </h1>
        
        <p style={{ fontSize: 28, color: "#a0a0a0", marginTop: 20, textAlign: "center" }}>
          Fullstack Developer & Computer Science Student
        </p>
        
        <div style={{ display: "flex", gap: 28, marginTop: 56 }}>
          <div style={{ padding: "14px 32px", background: "#FF6B35", color: "#000", borderRadius: 10, fontWeight: 700, fontSize: 22 }}>
            View Projects →
          </div>
          <div style={{ padding: "14px 32px", border: "2px solid #FF6B35", color: "#FF6B35", borderRadius: 10, fontSize: 22 }}>
            Contact Me
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
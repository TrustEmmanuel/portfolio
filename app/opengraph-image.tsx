import { ImageResponse } from "next/og";
import { profile } from "@/lib/profile";

export const alt = `${profile.name}, ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Share preview. Name and title on the same warm background as the site.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f3f1ec",
          color: "#171717",
          padding: "80px",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 24, fontSize: 36, color: "#3f3f46" }}>
          {profile.headline}
        </div>
      </div>
    ),
    { ...size },
  );
}

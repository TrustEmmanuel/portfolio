import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Tab icon. Initials on the same warm background as the site.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f3f1ec",
          color: "#171717",
          fontSize: 14,
          fontWeight: 700,
        }}
      >
        EU
      </div>
    ),
    { ...size },
  );
}

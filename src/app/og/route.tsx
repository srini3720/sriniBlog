import { ImageResponse } from "next/og";

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Srini Blogs";

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "white",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Image with Light Opacity */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage:
                "url(https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18134.jpg)", // Dynamic tech image
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3, // Slight transparency for readability
            }}
          />

          {/* Logo & Website Name */}
          <div
            style={{
              position: "absolute",
              top: 42,
              left: 42,
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
              padding: "10px 15px",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                backgroundColor: "green",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                fontWeight: "bold",
                borderRadius: "50%",
              }}
            >
              S
            </div>
            <span
              style={{
                marginLeft: 10,
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              srini.dev
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "20px 50px",
              margin: "0 42px",
              fontSize: 48,
              fontWeight: 900,
              maxWidth: 900,
              textAlign: "center",
              backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark overlay for contrast
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", // Subtle shadow
              color: "white",
            }}
          >
            {title}
          </div>

          {/* Author Name */}
          <div
            style={{
              marginTop: 20,
              fontSize: 24,
              fontWeight: 600,
              color: "#333",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "10px 20px",
              borderRadius: "8px",
            }}
          >
            By Srinivasan Shanmugam
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response("Failed to create OG Image", { status: 500 });
  }
}
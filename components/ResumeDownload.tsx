"use client";

type ResumeDownloadProps = {
  href: string;
  label: string;
  className: string;
  fileName: string;
};

// Opens the resume in a new tab and starts a download from the same click.
export function ResumeDownload({
  href,
  label,
  className,
  fileName,
}: ResumeDownloadProps) {
  function openAndDownload() {
    window.open(href, "_blank", "noopener,noreferrer");

    void fetch(href)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Resume download failed");
        }
        return response.blob();
      })
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(objectUrl);
      })
      .catch(() => {
        // The new tab already has the resume if the download request fails.
      });
  }

  return (
    <a
      href={href}
      className={className}
      onClick={(event) => {
        event.preventDefault();
        openAndDownload();
      }}
    >
      {label}
    </a>
  );
}

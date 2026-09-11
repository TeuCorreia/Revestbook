export const EXTENSOES_DOCUMENTO = [".docx", ".pptx"];

export const EXTENSOES_VIDEO = [
  ".mp4",
  ".webm",
  ".ogv",
  ".mov",
  ".m4v",
  ".mkv",
  ".avi",
  ".wmv",
  ".flv",
  ".mpg",
  ".mpeg",
  ".3gp",
  ".ts",
];

export function extensaoDeUrl(url: string): string {
  const partes = url.split("?")[0].split(".");
  return (partes[partes.length - 1] ?? "").toLowerCase();
}

export function ehVideo(url: string): boolean {
  return EXTENSOES_VIDEO.includes(`.${extensaoDeUrl(url)}`);
}

export function ehDocumento(url: string): boolean {
  return EXTENSOES_DOCUMENTO.includes(`.${extensaoDeUrl(url)}`);
}
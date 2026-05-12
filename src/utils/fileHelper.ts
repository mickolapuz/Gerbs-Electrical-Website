export const downloadPublicFile = (filePath: string, downloadName?: string) => {
  const link = document.createElement("a");

  link.href = filePath;
  link.download = downloadName ?? filePath.split("/").pop() ?? "download";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

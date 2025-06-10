async function uploadDokumenKeServer(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("upload.php", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  if (result.success) {
    return result.url;
  } else {
    throw new Error(result.error || "Upload gagal");
  }
}
async function uploadBanyakDokumen(files) {
  const hasil = [];

  for (const file of files) {
    try {
      const fileURL = await uploadDokumenKeServer(file);
      hasil.push({
        fileName: file.name,
        fileURL,
      });
    } catch (error) {
      console.error(`Gagal upload file ${file.name}:`, error);
    }
  }

  return hasil;
}

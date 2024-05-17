import DownloadIcon from "@mui/icons-material/Download";
import { Box } from "@mui/material";

const DownloadButton = ({ text, src, filename }) => {
  const downloadHandler = (src, filename) => {
    const pdfUrl = src;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="btn btn--outline"
      onClick={() => downloadHandler(src, filename)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {text}
        <DownloadIcon></DownloadIcon>
      </Box>
    </button>
  );
};

export default DownloadButton;

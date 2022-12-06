import { Box, Dialog, DialogContent } from "@mui/material";
import { styled } from "@mui/system";

const Img = styled("img")({
  width: "100%",
  height: "auto",
  // objectFit: "cover",
});

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const RegionModal = ({ isOpen, setOpen, data }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="lg" fullWidth={true}>
      <DialogContent>
        <CustomBox>
          <Box sx={{ width: "40%" }}>
            <Img src={data?.avatar} />
          </Box>
          <Box>
            <Box
              sx={{
                fontWeight: 700,
                fontSize: "24px",
                color: "#3A586E",
                mb: 2,
              }}
            >
              {data?.full_name.toUpperCase()}
            </Box>
            <Box sx={{ mb: 2 }}>
              {data?.description?.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    fontWeight: 300,
                    fontSize: "16px",
                    color: "#3A586E",
                    mb: "6px",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{item.post}</span>
                  {item.label}
                </Box>
              ))}
            </Box>
            {data?.social?.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "start", gap: 1, mb: 2 }}
              >
                <img src={item.img} />
                <Box>
                  <Box
                    sx={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#3A586E",
                      mb: "6px",
                    }}
                  >
                    {item.label}
                  </Box>
                  {item?.content?.map((item2, index) => {
                    return (
                      <a
                        key={index}
                        target="_blank"
                        href={
                          item.type === "mail"
                            ? "mailto:" + item2
                            : item.type === "phone"
                            ? "tel:" + item2
                            : item.type === "telegram"
                            ? "https://t.me/" +
                              item2.replaceAll(RegExp("[ ()-]", "g"), "")
                            : item.type === "whatsapp"
                            ? "https://wa.me/" +
                              item2.replaceAll(RegExp("[ ()-]", "g"), "")
                            : ""
                        }
                        style={{
                          display: "block",
                          fontWeight: 400,
                          fontSize: "16px",
                          color: "#3A586E",
                          marginBottom: "6px",
                        }}
                      >
                        {item2}
                      </a>
                    );
                  })}
                </Box>
              </Box>
            ))}
            <Box
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#3A586E",
              }}
            >
              {data?.address}
            </Box>
          </Box>
        </CustomBox>
      </DialogContent>
    </Dialog>
  );
};

export default RegionModal;

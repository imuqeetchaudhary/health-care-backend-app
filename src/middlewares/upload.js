const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const Exceptions = require("../utils/custom-exceptions");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const filename = `${file.fieldname}_${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, filename);
  },
});

const fileFilter = async (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    try {
      await fs.access("uploads/" + file.originalname);
      cb(null, false);
    } catch (err) {
      cb(null, true);
    }
  } else {
    cb(
      new Exceptions.ValidationError(file.mimetype + " is not supported .."),
      false
    );
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = { upload };

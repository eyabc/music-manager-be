import multer from 'multer';

const storage = multer.diskStorage({
    destination (req, file, callback) {
        callback(null, 'uploads');  // 파일이 저장되는 경로입니다.
    },
    filename (req, file, callback) {
        callback(null, Date.now() + "_" + file.originalname);  // 저장되는 파일명
    }
});

export const upload = multer({ storage })
                        .single("file");   // single : 하나의 파일업로드 할때


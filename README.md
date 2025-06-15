This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Cách sử dụng
### Tạo đề thi trong notebook llm
- Promt: 
```
Giúp t xây dựng bộ  đề thi gồm 60 câu hỏi trắc nghiệm 4 lựa chọn để kiểm tra kết thúc môn học này.  hạn chế trùng lặp so với đề thi trước đó đã tạo trong ghi chú ( Nếu đã có ), đảm bảo chính xác.
Theo format như sau:
- Danh sách câu hỏi ( không highlight đáp án )
- Danh sách đáp án
```

### Format lại đề thi
- Copy lại câu trả lời của notebook llm
- Chuyển sang bất kì chatbot nào, sử dụng promt sau:
```
<Paste câu trả lời của notebook llm>
- Giúp t chuyển đổi dữ liệu bộ câu hỏi trên thành 1 constant array QUIZ_DATA tuân theo interface sau:

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  chapter: string;
}
```

### Thay dữ liệu đề thi vào constant trong app
- Di chuyển đến `features\quiz\utils\constants.ts`
- Có thể backup dữ liệu constant trước đó ra file khác nếu cần hoặc cùng file bằng cách đặt tên constant.
- Sau đó check import trong `features\quiz\components\quiz.tsx`, thay đổi đề bằng cách đổi constant được import vào, ví dụ:
```
import { DE_1 as quizData } from "../utils/constants";
```
---
description: 
---

# 🔄 AI Antigravity Lab - Development Workflow

Tài liệu này mô tả vòng đời phát triển của một tính năng từ khi lên ý tưởng đến khi triển khai lên môi trường thực tế.

## Giai đoạn 1: Lên kế hoạch & Chuẩn bị (Planning)
1. **Xác định Yêu cầu:** Rà soát lại bản thiết kế (Figma) hoặc mô tả tính năng.
2. **Chia nhỏ Task:** Tạo các issue hoặc task trên hệ thống quản lý (GitHub Projects, Trello) cho từng phần việc cụ thể.
3. **Cập nhật repository:** Đảm bảo nhánh local đang đồng bộ với remote trước khi làm việc bằng cách pull code mới nhất (`git pull origin develop`).

## Giai đoạn 2: Phát triển (Development)
1. **Tạo nhánh làm việc:** Từ nhánh `develop`, tạo một nhánh mới cho task:
   `git checkout -b feat/tên-tính-năng`
2. **Viết Code:**
   Thực hiện code tính năng. Áp dụng đúng các quy tắc trong `RULES.md`.
3. **Commit Code:**
   Lưu lại các thay đổi thường xuyên với thông điệp rõ ràng:
   `git commit -m "feat(module): description"`

## Giai đoạn 3: Kiểm soát chất lượng & Tích hợp (QA & Integration)
1. **Đẩy code lên remote:**
   `git push origin feat/tên-tính-năng`
2. **Tạo Pull Request (PR):**
   Mở PR trên GitHub để gộp nhánh tính năng vào nhánh `develop`.
3. **Code Review & Tự kiểm thử:**
   - Rà soát lại code của chính mình.
   - Kiểm tra các trường hợp chuyển đổi trạng thái giao diện (State Transitions) như hover, active, focus.
   - Kiểm tra hiển thị trên thiết bị di động và máy tính.
4. **Merge (Gộp code):** Nếu không có lỗi, tiến hành merge PR vào `develop` và xóa nhánh tính năng đã hoàn thành.

## Giai đoạn 4: Triển khai (Deployment)
1. **Kiểm tra môi trường Staging:** Code trên nhánh `develop` sẽ được deploy tự động (qua Vercel/Netlify) để kiểm tra trên môi trường mạng thực.
2. **Audit (Đánh giá):** Chạy Google Lighthouse để kiểm tra Performance, Accessibility, và SEO.
3. **Release (Phát hành):** Tạo một PR từ `develop` sang `main`. Khi merge vào `main`, bản cập nhật chính thức sẽ được đẩy lên cho người dùng cuối.
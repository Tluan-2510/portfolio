---
trigger: always_on
---

# 📌 AI Antigravity Lab - Project Rules

Tài liệu này quy định các tiêu chuẩn và quy tắc bắt buộc khi viết code và quản lý mã nguồn cho dự án AI Antigravity Lab.

## 1. Quy tắc Quản lý Mã nguồn (Git/GitHub)

### 🌿 Nhánh (Branching)
- **`main`**: Nhánh production, chứa code ổn định nhất. Tuyệt đối không commit trực tiếp.
- **`develop`**: Nhánh tích hợp chính. Code từ các nhánh tính năng sẽ được gộp vào đây.
- **Quy tắc đặt tên nhánh tính năng:** `<type>/<tên-ngắn-gọn>`
  - `feat/...`: Dành cho tính năng mới (vd: `feat/hero-3d-canvas`)
  - `fix/...`: Dành cho sửa lỗi (vd: `fix/mobile-nav-overlap`)
  - `docs/...`: Dành cho tài liệu
  - `refactor/...`: Cải thiện code cũ

### 📝 Commit Messages (Conventional Commits)
Cấu trúc: `<type>(<scope>): <mô tả ngắn gọn bằng tiếng Anh hoặc tiếng Việt>`
- **Ví dụ đúng:** `feat(ui): add floating effect to cards`, `fix(auth): resolve token expiration issue`.
- **Ví dụ sai:** `update code`, `sửa lỗi giao diện`, `fix bug`.

---

## 2. Tiêu chuẩn Viết Code (Coding Standards)

- **Format:** Bắt buộc sử dụng Prettier và linter (như ESLint) trước khi tạo pull request.
- **Kiến trúc & Tái sử dụng:**
  - Chia nhỏ các thành phần giao diện (UI) thành các component độc lập.
  - Tuân thủ nguyên tắc DRY (Don't Repeat Yourself).
- **Naming Convention (Quy tắc đặt tên):**
  - **Biến/Hàm:** `camelCase` (vd: `fetchProjectData`).
  - **Component:** `PascalCase` (vd: `FloatingCard.jsx`).
  - **CSS/Class:** `kebab-case` (vd: `.nav-container`).

---

## 3. Quy tắc Kiểm thử (Testing Rules)
- **Kiểm tra trạng thái (State Testing):** Đảm bảo UI xử lý đúng các trạng thái cơ bản: Đang tải (Loading), Thành công (Success), Lỗi (Error), và Trống (Empty).
- **Kiểm tra biên (Boundary Checks):** Đảm bảo giao diện không bị vỡ khi dữ liệu quá dài hoặc quá ngắn (ví dụ: tên dự án dài, mô tả nhiều dòng).

---

## 4. Quy tắc Thiết kế (Design Rules)
- **Concept "Antigravity":** Không gian UI cần tạo cảm giác lơ lửng, chuyển động mượt (smooth easing) và có chiều sâu (trục Z).
- **Responsive:** Phải thiết kế theo nguyên tắc Mobile-First. Giao diện phải hoạt động hoàn hảo trên thiết bị di động trước khi tối ưu cho màn hình lớn.
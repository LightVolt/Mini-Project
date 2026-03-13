/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ธีมซากุระ (Sakura Blossoms)
        'brand-primary': '#FFB7C5',   // ชมพูซากุระ
        'brand-bg': '#FFF9FA',        // ขาวอมชมพู (พื้นหลัง Wix สไตล์)
        'brand-text': '#4A373B',      // น้ำตาลกิ่งไม้ (ใช้อ่านเนื้อหา)
        'brand-accent': '#E75480',    // ชมพูเข้ม (สำหรับปุ่ม)
      },
      borderRadius: {
        'xlarge': '2rem',
      }
    },
  },
  plugins: [],
}
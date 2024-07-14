export const seo = {
  title: 'slarkvan | 独立开发者',
  description:
    '我叫 slarkvan，一名独立开发者。目前独立作品 syncwise 和 imgsaver。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://slarkvan.com'
      : 'http://localhost:3000'
  ),
} as const
